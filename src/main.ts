import { AESUtils } from "./utils/AESUtils";
import { RSAUtils } from "./utils/RSAUtils";
import { SignUtils } from "./utils/SignUtils";

function run() {
  const plainData = "Congratulations HAHAHA !";

  // ====================== AES 加解密部分 ======================
  // AES预共享秘钥，注意与IV的长度对应
  const keyBase64 = "8KQeGS36CMmIy+5oXMceKuexEk+loKDmpgPhK7WJXR8=";
  // AES加密初始化向量
  const ivBase64 = "80k09l1JM+0jpVrV3PN0nrmf+z8LLr90ZIQRMu5m7b8=";
  const aesUtils = new AESUtils(keyBase64, ivBase64);

  const aesData = aesUtils.encrypt(plainData);
  const plantText = aesUtils.decrypt(aesData);

  // ====================== RSA 加解密部分 ======================
  // RSA公钥
  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5H0p7p2seV/2xVg5YMwN
  g/+V0edd/DLvz7PR78Lj9qn/9lxF3xiVM533nGnDUbKEtwV7cGtwHS4zbjcbWvg9
  sVQtyullUx08iHmiSm2rIbu447TAbpv+Di+aYyilGvViy/3kpQwhW9cxnleAG51c
  mH38fVk09AwlkauK7V9NsziSrxtFrjjxW/jmxte6Nnqipg+asihv5Xlc/NHWEv2q
  VIsXhY3G2zV5oNhSAi/hQo33HtMI16E/sZ93/zPu4KcNhC+tZYSHL0l9CeUZC/ep
  I01Fqt5L5Tn7P1qlAo7RDIIbo8CgrZWM6NO+Qj7XjxwyruvvwAsGzuKwHZG5mSZN
  mwIDAQAB
  -----END PUBLIC KEY-----
  `;

  // RSA私钥
  const privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIIEpAIBAAKCAQEA5H0p7p2seV/2xVg5YMwNg/+V0edd/DLvz7PR78Lj9qn/9lxF
  3xiVM533nGnDUbKEtwV7cGtwHS4zbjcbWvg9sVQtyullUx08iHmiSm2rIbu447TA
  bpv+Di+aYyilGvViy/3kpQwhW9cxnleAG51cmH38fVk09AwlkauK7V9NsziSrxtF
  rjjxW/jmxte6Nnqipg+asihv5Xlc/NHWEv2qVIsXhY3G2zV5oNhSAi/hQo33HtMI
  16E/sZ93/zPu4KcNhC+tZYSHL0l9CeUZC/epI01Fqt5L5Tn7P1qlAo7RDIIbo8Cg
  rZWM6NO+Qj7XjxwyruvvwAsGzuKwHZG5mSZNmwIDAQABAoIBAQC31Nv/12wE22i3
  rhu7/XCCWwg3MWc0mebHvW2S8cJnmq8Nj3/H1wdz2Ax4E7/J409T0V1XPZmeYKWQ
  b1XbAw7ftVKChvW2wTcKtpIUP9gH8/j1e1+3nlnxH+ufC/yKjBNI/KURBYlxUtnh
  A5VWomz1Y6fZUgSAtaUkZlgIUz04iy5ce8mXk7VisJTbKRLja73XBFEX8+IlFO9a
  w622v21HWJqPyG9K8uRlKrZsGsns8ZhHhl4c9zLCR5Bq4ziELxO8gdIOutpUyC+K
  2kircklAg5XaQS8GTRz4143U2GGh+EOQ6f28YBh1CW5ABpLdS6d00QuKOEPUS0En
  YiJoZk3BAoGBAPl8XlAd7lLF8lQWGCk4etENxy/dNJKOv2xEBxejizoYUVPZqNe/
  9HZqxfBunC+SSCHpBDCh8z2zZExvHHrtu+FCJ/Tl8VMbnQW12osXwCXlLzV3CadM
  B1pcswCuZI1M26ZoO84HBgN+JW8P91xIqGPWPDkeDokVoFabh5A9AQTHAoGBAOp0
  ckcTAQfkLu5MPP4w2T5f6hKGoBMg76yslMqojpQXYD8RI0cuWmD5BLEW5FZWETeM
  vYh0CEZ2WsYFX5BYLb8ZBq3Qfth97hYOWhVdOmclqb4uW9d7gNaI1TVqs5MM20sf
  kLb3DKiUvIJXvLpfbymxYIPkCT2JVYK0jkAlr/SNAoGAE6C5OsxgB5sTKZJjbDrJ
  TtEqrpVUoYMhhD8F39I6DeQD4fjp06+CaB6WXAgXuZZknmZasgjLvjry1SCYuQMj
  GOG/iwDcL5GolN5txyujLlgNksM+uy68FVvdqVwPBR7a2QiyS885peSyxT4YU+ZT
  eSdNraCzvA07hBTQYYSrI9kCgYBTRMBBlfJLxzMT12fiL584lAAiTEYWBSCah0Dh
  KTRaTGMWgxOweDoJLugHrUWzlCXRQN8f03YM8IQUyFvEfEzjDhRdLyud4DvrAXXl
  GJNhhvLeZMChq296wmZW7mqQ04QfDjrrgJqyVQEOmfKhjruAZ0sMDLVrcZc5ML9E
  8R2pEQKBgQDGB2U4Ludqh3xDyNvexc5XdvU7EPRV+5gYayhChdXsPSrSL/0TOlHQ
  L/xdrH3l6plA4cuDXHqer29ZtAWH9HLVqY6ZTmhaqxL3Oj6Ad6Hvvi6t9bmBhrVQ
  VzsoaM65I6bPm8yNlCEXfFmQzJE0VMgnOsIW1rgTHkxL9AX039V8Ug==
  -----END RSA PRIVATE KEY-----`;

  const rsaUtils = new RSAUtils(privateKey, publicKey);

  const rsaData = rsaUtils.encryptPublicRSA(plainData).toString();

  const plantRsaText = rsaUtils.decryptPrivateRSA(rsaData).toString();

  const sign = rsaUtils.digitalSign(plainData).toString();

  const checkIsPass = rsaUtils.digitalSignCheck(plainData, sign).toString();

  // ====================== 数据摘要部分 ======================

  const md5Data = SignUtils.signMD5(plainData);
  const sha1Data = SignUtils.signSHA1(plainData);
  const sha256Data = SignUtils.signSHA256(plainData);

  const dataMap = [
    [plainData, "plain-data"],
    [aesData, "aes-encrypt"],
    [plantText, "aes-decrypt"],
    [rsaData, "rsa-encrypt"],
    [plantRsaText, "rsa-decrypt"],
    [sign, "rsa-signature"],
    [checkIsPass, "rsa-signature-check"],
    [md5Data, "md5"],
    [sha1Data, "sha1"],
    [sha256Data, "sha256"],
  ];

  dataMap.forEach(([data, selector]) => {
    window.document.querySelector<HTMLSpanElement>(`#${selector}`)!.innerText =
      data;
  });
}

run();
