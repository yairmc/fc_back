import { INTEGER, STRING } from 'sequelize';
import { sequelize } from './connection.js'

export const UserModel = sequelize.define('User', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    username: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: STRING,
        allowNull: false,
    },
    address: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    celphone: {
        type: INTEGER,
        allowNull: false,
    },
    timeStart: {
        type: INTEGER,
    },
    timeEnd: {
        type: INTEGER,
    }
}, {
    tableName: 'User',
    timestamps: false
})

// functions 
export const getAllUsers = async () => {
    const allUsers = await UserModel.findAll({
        order: ['id'],
        atributes: ['id', 'user', 'username', 'password', 'address', 'celphone', 'timeStart', 'timeEnd']
    })
    return allUsers;
}

export const createUser = async (user) => {
    const newUser = await UserModel.create(user)
}