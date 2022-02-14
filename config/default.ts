// exported via the config npm package and imported using it
export default {
  port: 2018,
  // TODO: read uri from .env
  dbUri: process.env.DATABASE_URI,
}