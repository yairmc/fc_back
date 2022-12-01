import { INTEGER, STRING } from "sequelize";
import {sequelize} from './connection.js'

export const MailModel=sequelize.define('Mail', {
    mail:{
        type:STRING,
        allowNull:false
    },
    userId:{
        type:INTEGER,
        allowNullL:false
    }
},{
    tableName:'Mail',
    timestamps:false
})

export const getAllMails=async()=>{
    const allEmails=await MailModel.findAll({
        order:['id'],
        atributes:[ 'mail', 'userId']
    })
    return allEmails;
}

export const createMail=async(mail)=>{
    const newMail=await MailModel.create(mail)
}