//パスワードを暗号化（ハッシュ化）している場合
//passwordはSALT:SHA256HASHの形式になります
const crypto = require("crypto");
const HASH_ALGO = "SHA256";

class User{
  constructor(email, name, address, password){
    this.email = email;
    this.name  = name;
    this.address = address;
    this.password = password;
  }

  checkPassword(rawPassword){
    let [salt, hash] = this.password.split(":");
    let checkHash =  crypto.createHash(HASH_ALGO).update(salt + rawPassword, "utf8").digest("hex");
    return checkHash == hash;
  }

  hashPassword(){
    let salt = crypto.randomBytes(8).toString("hex");
    let hash = crypto.createHash(HASH_ALGO).update(salt + this.password, "utf8");
    this.password = salt + ":" + hash;
  }
}

module.exports = User;
