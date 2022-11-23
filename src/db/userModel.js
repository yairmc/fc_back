import { INTEGER, STRING } from 'sequelize';
import { sequelize } from './connection.js'

export const UserModel = sequelize.define('User', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: STRING,
        allowNull: false,
    }
}, {
    tableName: 'User',
    timestamps: false
})

// functions 
export const getAllUsers = async () => {
    const allUsers = await UserModel.findAll({
        order: ['id'],
        atributes: ['id', 'username', 'password']
    })
    return allUsers;
}

export const createUser = async (user) => {
    const newUser = await UserModel.create(user)
}