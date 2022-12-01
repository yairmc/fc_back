import { dbConnection } from './connection.js';
import './userModel.js';
import './mailModel.js';

const main = async () => {
    try {
       await dbConnection();
    } catch (error) {
        console.log(error);
    }
}

main();