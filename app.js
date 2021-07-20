const Sequelize = require('./models').sequelize;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'library.db'
});

// async IIFE
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database successful!');
      } catch (error) {
        console.error('Error connecting to the database: ', error);
      }
    })();

    module.exports = app;