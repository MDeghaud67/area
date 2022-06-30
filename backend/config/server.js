module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 8080),
  app: {
    keys: env.array('APP_KEYS', ['firstAppKey']),
  },
});
