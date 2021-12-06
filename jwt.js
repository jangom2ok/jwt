require('dotenv').config()

const env = process.env
const jwt = require('jsonwebtoken')
const {randomBytes} = require('crypto')

function generateRandomString(length) {
  return randomBytes(length).reduce((p, i) => p + (i % 36).toString(36), '')
}

const secret = env.JWT_SECRET ?? 'dummy'
const sub = env.JWT_SUB ?? 'dummy'
const jti = generateRandomString(36)
const isCommunityMember = env.IS_COMMUNITYMEMBER == 'true'

const payload = {
  sub,
  jti,
  isCommunityMember
}

console.log('Bearer ' + jwt.sign(payload, secret, { expiresIn: "90 days" }))
