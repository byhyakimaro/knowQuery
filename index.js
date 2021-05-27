const express = require('express');
const rp = require('request-promise');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Autorization'
	);

	if (req.method === 'OPTIONS') {
		res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).send({});
	};
	next();
});

app.post('/', async (req, res) => {
	const request = await rp({ 
		method: req.body.method,
		uri: req.body.url,
		form: req.body.body,
		headers: req.body.headers
	})
  res.send(request);
});

app.get('/lib/:id_libs', async (req, res) => {
	res.sendFile( __dirname + "/lib/" + req.params.id_libs );
});

app.get('/examples', async (req, res) => {
	res.sendFile( __dirname + "/examples/index.html" );
});

app.listen(3000, () => {
  console.log('server started');
});