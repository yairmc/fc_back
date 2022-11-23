import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createUser, getAllUsers } from "./db/userModel.js";
import { sequelize} from "./db/connection.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
sequelize.sync()
    .then(()=>console.log("Connected with the data base"))
    .catch(error=>console.log(error))

app.get('/', (req,res)=>{
  res.status(200).json("jala")
})

app.post("/login", async (req, res) => {

  console.log("Entro");
  const { body } = req;
  const { username, password } = body;

  const result = await getAllUsers();
  const users = result.map(user => user.dataValues);
  let authenticate = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) authenticate = true
  }

  if (authenticate) res.status(200).json('authenticate')
  else res.status(403).json("Access Denied")


})

app.post("/signUp", async (req, res) => {
  console.log("HERE");
  const { body } = req;
  try {
    await createUser(body);
    res.status(200).json('new user was created');
  } catch (error) {
    res.status(404).json("Invalid credentials");
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log(`server runing in port ${PORT}`);