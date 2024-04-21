import express from 'express'
const app = express()
const port = 80
import { employee } from './models/employee.js';
import mongoose from 'mongoose';
import path from 'path';
const __dirname = path.resolve();

const conn = await mongoose.connect('mongodb://localhost:27017/company');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  console.log("request come in");
  employee.deleteMany();
  res.sendFile('templates/index.html', { root: __dirname });
})

let nameArr = ["Sawan", "Sakshi", "Sourav", "Simran", "Shivam", "Vanshika"];
let cityName = ["Pithampur", "Indore", "Devas", "Ujjain", "Banglore", "Mumbai"];
// get all employees
app.post('/success', (req, res) => {
  for (let i = 0; i < 10; i++) {
    const a = new employee({ name: nameArr[Math.floor(Math.random() * 6)], salary: Math.floor(Math.random() * 100000) + 10000, city: cityName[Math.floor(Math.random() * 6)], isManager: Math.floor(Math.random() * 2) == 1 ? true : false });
    a.save();
  }
  res.sendFile('templates/success.html', { root: __dirname });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

