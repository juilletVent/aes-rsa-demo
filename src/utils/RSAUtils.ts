import JSencrypt from "jsencrypt";
import CryptoJS from "crypto-js";

// openssl 证书生成指令，2048 为密钥长度
// openssl genrsa -out rsa_private.key 2048
// openssl rsa -in rsa_private.key -pubout -out rsa_public.key

class RSAUtils {
  private privateKey: string;
  private publicKey: string;

  constructor(privateKey: string, publicKey: string) {
    this.privateKey = privateKey;
    this.publicKey = publicKey;
  }

  // 公钥加密
  encryptPublicRSA(data: string) {
    const sign = new JSencrypt();
    sign.setPublicKey(this.publicKey);
    const plantData = sign.encrypt(data);
    return plantData;
  }

  // 私钥解密
  decryptPrivateRSA(data: string) {
    const sign = new JSencrypt();
    sign.setPrivateKey(this.privateKey);
    const decodeData = sign.decrypt(data);
    return decodeData;
  }

  // 公钥验签
  digitalSignCheck(data: string, signature: string) {
    const sign = new JSencrypt();
    sign.setPublicKey(this.publicKey);
    // TODO 常用加签方法：md5、sha1、sha256、sha512
    // 如果你的应用端使用了不同的加签方法，这里需要修改
    var verified = sign.verify(data, signature, (p) =>
      CryptoJS.SHA256(p).toString()
    );
    return verified;
  }

  // 私钥加签
  digitalSign(data: string) {
    const sign = new JSencrypt();
    sign.setPrivateKey(this.privateKey);
    const signature = sign.sign(
      data,
      (p) => CryptoJS.SHA256(p).toString(),
      "sha256"
    );
    return signature;
  }
}

export { RSAUtils };
