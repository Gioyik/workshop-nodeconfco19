var crypto = require('crypto')

module.exports = etag

function etag (entity, opts) {
  if (Object(entity) === entity) {
    opts = entity
    entity = opts.entity
  }

  var error = false
  opts = opts || {}
  opts.algorithm = opts.algorithm || 'md5'
  opts.encoding = opts.encoding || 'utf8'
  opts.output = opts.output || 'base64'

  var hash

  try {
    hash = crypto
      .createHash(opts.algorithm)
      .update(entity, opts.encoding)
  } catch (e) {
    error = true
  }

  if (!opts.output || opts.output === 'base64') {
    try {
      hash = hash
        .digest('base64')
        .replace(/=+$/, '')
    } catch (e) {
      error = true
    }

    if (!error) {
      return hash
    }
  }

  try {
    hash = hash.digest(opts.output)
  } catch (e) {
    error = true
  }

  if (error) {
    return Error('oh oh')
  }

  return hash
}
