const crypto = require('crypto');
require('dotenv').config();

const md5 = (keys) => crypto.createHash('md5').update(keys).digest('hex');
const ts = process.env.TS;
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const hash = () => md5(ts+privateKey+publicKey);

module.exports = {
  hash,
  ts,
  publicKey
}
