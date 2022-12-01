import { MailModel } from "./mailModel";
import { UserModel } from "./userModel";


UserModel.hasOne(MailModel,{
    foreignKey:'userId'
})

MailModel.belongsTo(UserModel);