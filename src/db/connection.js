import Sequelize from 'sequelize';

export const sequelize = new Sequelize(process.env.PGDATABASE || 'foodcomunity', process.env.PGUSER || 'postgres', process.env.PGPASSWORD || 'root', {
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    dialect: 'postgres',

    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export const dbConnection = async () => {
    try {
        const connection = await sequelize.sync({ alter: true });
        if (connection) console.log("Database Connected");
    } catch (error) {
        console.log(error);
        console.log("error in the connection");
    }
}
