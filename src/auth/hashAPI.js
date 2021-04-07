const crypto = require('crypto');

const md5 = (keys) => crypto.createHash('md5').update(keys).digest('hex');
const ts = 1;
const privateKey = "003cdef8d94e3982ce7d6316de95bb6d6f9c0ee1";
const publicKey = "95418ebca9cf702b7f32d48ad8d102ec";

const hash = () => md5(ts+privateKey+publicKey);

module.exports = {
  hash,
  ts,
  publicKey
}
