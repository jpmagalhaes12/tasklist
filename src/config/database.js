module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'tasklist',
    define: {
        timesstamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
