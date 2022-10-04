import express from 'express';
import {pool} from './db.js';
//import {createConnection} from './db2.js';
import {PORT} from './config.js';


const app = express();

/*
function delay(t,v){
	return new Promise(function(resolve){
		setTimeout(resolve.bind(null,v), t);
	})
}
*/

app.get('/', async (req, res)=>{
    const [rows] = await pool.query('SELECT * FROM users1')
    res.json(rows)
})

/*
const getUser = async (msgfrom) =>{
    const connection = await createConnection();
	const [rows] = await connection.execute('SELECT name FROM users WHERE name = ?', [msgfrom]);
    console.log(rows)
	delay(1000).then(async function(){
		await connection.end();
		delay(500).then(async function(){
			connection.destroy();
		})
	});
	if(rows.lenght>0) return true;
	return false;
}

*/
/*
app.get('/zap', async(req,res)=>{

	try{
		//const nomeContato = msg._data.notifyName;
		//const user = msg.from.replace(/\D/g,'');
        const user = "Alex";
		const getUserFrom = await getUser(user);

		if(getUserFrom){
			console.log("Hay usuario")
            await setUser(user,nomeContato);
			console.log('Usuario almacenado: '+user+' - '+nomeContato);

		}
		if(getUserFrom !== false){
			console.log("Usuario ya fué almacenado");
		}

	}catch(e){
		console.log(e)
	}    

})
*/

app.get('/connection', async(req, res)=>{
    const [result] = await pool.query('SELECT "Hello world" as RESULT')
    res.json(result[0])
    res.send("Hola mundo")
})

app.get('/create', async(req, res)=>{
    const result = await pool.query('INSERT INTO users1(name) VALUES ("Alex")');
    res.json(result);

})



app.listen(PORT);
console.log('Server on port', PORT);












