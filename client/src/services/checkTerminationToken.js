// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

const checkTerminationToken = token => {
  const decodedJwt = jwt_decode(token)
  if (decodedJwt.exp * 1000 < Date.now()) {
    return true
  }
  return false
}

export default checkTerminationToken
