const config = {};

// Using environment variables for sensitive data (username and password) is recommended
config.mongoURI = {
  production: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority`,
  development: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
  test: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority`,
};

module.exports = config;
