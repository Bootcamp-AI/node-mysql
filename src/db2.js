//const mysql = require('mysql2/promise');
import mysql from 'mysql2/promise';

export const createConnection =  async()=>{
    return await mysql.createConnection({ 
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'usersdb'
})
}


