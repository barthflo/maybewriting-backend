module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '162.241.253.75'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'flobarth_francesco'),
        username: env('DATABASE_USERNAME', 'flobarth_admin'),
        password: env('DATABASE_PASSWORD', '277506Flo'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
