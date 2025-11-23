import CryptoJS from "crypto-js";

export const STORAGE_KEY = "nhl-model-password";
export const SITE_PASSWORD = import.meta.env.VITE_PASSWORD;
export const ENCRYPTION_KEY =
  import.meta.env.VITE_ENCRYPTION_KEY || "default-secret-key";

export const encryptPassword = (password: string): string => {
  return CryptoJS.AES.encrypt(password, ENCRYPTION_KEY).toString();
};

export const decryptPassword = (encryptedPassword: string): string => {
  const decrypted = CryptoJS.AES.decrypt(encryptedPassword, ENCRYPTION_KEY);
  return decrypted.toString(CryptoJS.enc.Utf8);
};
