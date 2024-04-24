import CryptoJS from "crypto-js";

class AESUtils {
  private key: string;
  private iv: string;

  constructor(key: string, iv: string) {
    this.key = key;
    this.iv = iv;
  }

  encrypt(data: string) {
    const key = CryptoJS.enc.Base64.parse(this.key);
    const iv = CryptoJS.enc.Base64.parse(this.iv);

    const resultData = CryptoJS.AES.encrypt(data, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return resultData.toString();
  }

  decrypt(data: string) {
    const key = CryptoJS.enc.Base64.parse(this.key);
    const iv = CryptoJS.enc.Base64.parse(this.iv);

    const decryptData = CryptoJS.AES.decrypt(data, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decryptData.toString(CryptoJS.enc.Utf8);
  }
}

export { AESUtils };
