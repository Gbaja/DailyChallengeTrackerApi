// exported via the config npm package and imported using it
export default {
  port: 2018,
  // TODO: read uri from .env
  dbUri: process.env.DATABASE_URI,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ApiIdentifier: process.env.AUTH0_API_IDENTIFIER,
}