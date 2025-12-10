import { encrypt, decrypt } from '@/utils/crypto.js';

describe('Crypto Utils', () => {
  it('encrypts and decrypts correctly', () => {
    const text = "Secret Message";
    const password = "password123";

    const encrypted = encrypt(text, password);
    expect(encrypted).not.toBe(text);

    const decrypted = decrypt(encrypted, password);
    expect(decrypted).toBe(text);
  });

  it('decrypts with wrong password returns garbage (or just fails to match)', () => {
    const text = "Secret Message";
    const password = "password123";
    const wrongPassword = "wrongpassword";

    const encrypted = encrypt(text, password);
    const decrypted = decrypt(encrypted, wrongPassword);

    expect(decrypted).not.toBe(text);
  });
});
