const express = require('express');
const mysql = require('mysql');
let lang = 'Python'

//Connecting database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tippy123',
    database: 'sysdev_recruitment'
});

db.connect((error) => {
    if(error){
        throw(error);
    }
    console.log('Database Connected');
})

//Creating application
const port = 3000;
const app = express(); 

app.listen(port, (error) => {
    if (error){
        console.log(error);
    }
    else{
        console.log(`Server started on port ${port}`);
    }
})

//Inserting data to database
app.get('/favorite', (request, response) => {
    let sql = 'INSERT INTO programming_languages (favorites) VALUES (?)';

    db.query(sql, [lang], (error, result) => {
        if (error){
            throw(error);
        }
        console.log(result);
        response.send(`Favorite language, ${lang}, added`);
    })
})


/*
CREATE DATABASE sysdev_recruitment;
USE sysdev_recruitment;
CREATE TABLE programming_languages (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    favorites VARCHAR(255));
*/


/*
npm init -y
nodemon app.js
*/