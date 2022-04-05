import jwt from "express-jwt";
import JwksRsa from "jwks-rsa";
import config from 'config';

const auth0Domain = config.get<string>("auth0Domain")
const auth0ApiIdentifier = config.get<string>("auth0ApiIdentifier")

const checkJwt = jwt({
  secret: JwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${auth0Domain}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  aud: `${auth0ApiIdentifier}`,
  issuer: `https://${auth0Domain}/`,
  algorithms: ['RS256']
});

export default checkJwt