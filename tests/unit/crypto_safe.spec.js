import { encrypt, decrypt } from '@/utils/crypto.js';

describe('Crypto Utils Safe', () => {
  it('produces different ciphertexts for same text and password (IV check)', () => {
    const text = "Secret Message";
    const password = "password123";

    const encrypted1 = encrypt(text, password);
    const encrypted2 = encrypt(text, password);

    expect(encrypted1).not.toBe(encrypted2);

    const decrypted1 = decrypt(encrypted1, password);
    const decrypted2 = decrypt(encrypted2, password);

    expect(decrypted1).toBe(text);
    expect(decrypted2).toBe(text);
  });
});
