import CryptoJS from "crypto-js";

class SignUtils {
  static signMD5(data: string) {
    return CryptoJS.MD5(data).toString(CryptoJS.enc.Hex);
  }

  static signSHA1(data: string) {
    return CryptoJS.SHA1(data).toString(CryptoJS.enc.Hex);
  }

  static signSHA256(data: string) {
    return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
  }
}

export { SignUtils };
