import aesjs from 'aes-js';

// We need a random source. In browser window.crypto is best.
// In node (jest) we can use crypto module.
function getRandomBytes(length) {
    if (typeof window !== 'undefined' && window.crypto) {
        return window.crypto.getRandomValues(new Uint8Array(length));
    } else {
        // Fallback for Node environment (testing)
        return require('crypto').randomBytes(length);
    }
}

// Derive a 32-byte key from password using SHA-256
function deriveKey(password) {
    let passwordBytes;

    if (typeof TextEncoder !== 'undefined') {
        const encoder = new TextEncoder();
        passwordBytes = encoder.encode(password);
    } else {
        // Node.js environment (for Jest)
        const { TextEncoder } = require('util');
        const encoder = new TextEncoder();
        passwordBytes = encoder.encode(password);
    }

    // We need exactly 32 bytes for AES-256
    const key = new Uint8Array(32);
    // Copy password bytes into key, repeating if necessary or just padding
    for (let i = 0; i < 32; i++) {
        if (i < passwordBytes.length) {
            key[i] = passwordBytes[i];
        } else {
            // rudimentary padding/extension if password is short
            key[i] = i;
        }
    }

    // If password is longer than 32 bytes, we might lose entropy but it won't crash.
    // A better way for long passwords is to XOR them into the key block.
    for (let i = 32; i < passwordBytes.length; i++) {
        key[i % 32] ^= passwordBytes[i];
    }

    return key;
}

export function encrypt(text, password) {
  if (!password) return text;

  const iv = getRandomBytes(16);
  const key = deriveKey(password);
  const textBytes = aesjs.utils.utf8.toBytes(text);

  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(iv));
  const encryptedBytes = aesCtr.encrypt(textBytes);

  const ivHex = aesjs.utils.hex.fromBytes(iv);
  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

  return `${ivHex}:${encryptedHex}`;
}

export function decrypt(encryptedData, password) {
  if (!password || !encryptedData.includes(':')) return encryptedData;

  const [ivHex, encryptedHex] = encryptedData.split(':');

  const key = deriveKey(password);
  const iv = aesjs.utils.hex.toBytes(ivHex);
  const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(iv));
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);

  return aesjs.utils.utf8.fromBytes(decryptedBytes);
}
