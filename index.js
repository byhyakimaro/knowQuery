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
			method: 'POST',
			uri: 'https://server.febrafar.stefaniniinspiring.com.br/singleinstance/oauth/token?grant_type=client_credentials',
			form: 'grant_type=client_credentials',
			headers: {
			'Content-Type':'text/plain',
			'Authorization':'Basic emlHUk1QWjJvTDJQcmZpb0xpa1c6WmFJT2EzWU9GYWpnbDhnbGRJZnk=',
			'Host':'server.febrafar.stefaniniinspiring.com.br'
		}
	})
  res.send(request);
	console.log();
});

app.listen(3000, () => {
  console.log('server started');
});