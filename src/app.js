import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createUser, getAllUsers } from "./db/userModel.js";
import {createMail, getAllMails} from "./db/mailModel.js"
import { sequelize } from "./db/connection.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
sequelize.sync()
  .then(() => console.log("Connected with the data base"))
  .catch(error => console.log(error))

app.get('/', (req, res) => {
  res.status(200).json("jala")
})

app.post("/login", async (req, res) => {

  const { body } = req;
  const { username, password } = body;

  const result = await getAllUsers();
  const users = result.map(user => user.dataValues);
  let authenticate = false;
  let user;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      authenticate = true
      user=users[i];
    }
  }

  if (authenticate) res.status(200).json(user)
  else res.status(403).json("Access Denied")


})

app.post("/signUp", async (req, res) => {
  const { body } = req;
  try {
    await createUser(body);
    res.status(200).json('signUp success');
  } catch (error) {
    res.status(404).json("Invalid credentials");
  }
})

app.get("/users", async(req,res)=>{
  try{
    const users=await getAllUsers();
    res.status(200).json(users)
  }catch(error){
    res.status(404).json("Error to get users")
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log(`server runing in port ${PORT}`);