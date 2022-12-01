import Sequelize from 'sequelize';

export const sequelize = new Sequelize('railway', 'postgres', 'uSq2AKIr0jIKvbYh8HCb', {
    host: 'containers-us-west-75.railway.app',
    dialect: 'postgres',
    port:"6358",
    operatorsAliases:0,
    define:{
        timestamps:false
    },
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    }
});

export const dbConnection = async () => {
    try {
        const connection = await sequelize.sync({ force: true });
        if (connection) console.log("Database Connected");
    } catch (error) {
        console.log(error);
        console.log("error in the connection");
    }
}
