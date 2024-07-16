// import CryptoJS from 'crypto-js';

// // Generate a secure key
// const generateSecureKey = (): string => {
//     const currentDate = new Date().toISOString();
//     const randomPart = Math.random().toString(36).substring(2, 15);
//     const specialChars = "!@#$%^&*()_+";
//     const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

//     return `${currentDate}-${randomPart}-${specialChar}`;
// };

// // Encrypt and mask the key
// const maskKey = (key: string): string => {
//   const passphrase = 'your-secret-passphrase'; // Use a strong passphrase
//   const encrypted = CryptoJS.AES.encrypt(key, passphrase).toString();
//   const encoded = btoa(encrypted); // Base64 encoding after AES encryption
//   return encoded;
// };

// // Decrypt and unmask the key
// const unmaskKey = (maskedKey: string): string => {
//   const passphrase = 'your-secret-passphrase'; // Use the same strong passphrase
//   const decoded = atob(maskedKey); // Base64 decoding before AES decryption
//   const decrypted = CryptoJS.AES.decrypt(decoded, passphrase);
//   return decrypted.toString(CryptoJS.enc.Utf8);
// };
