'use strict';

const express = require('express');
const app = express();


const {
	MongoClient
} = require('mongodb');

const port = process.env.PORT || 3001;
//mongodb://[username:password@]host1[:port1][,...hostN[:portN]]][/[database][?options]]
const mongoUri = 'mongodb://mongoadmin:secret@localhost:27017';

function getConnectionMongo() {
	return new Promise((resolve, reject) => {
		MongoClient.connect(mongoUri, { useNewUrlParser: true } , (err, client) => {
			if (err) {
				reject(err);
			}
			else{
				resolve(client);
			}
		});
	});
}

app.get('/', function ping(req, res) {
	res.send('Hello World!');
});

app.get('/load', async function loadData(req, res, next) {
	let count = 0;
	const max = 10000;
	try {
		const client = await getConnectionMongo();

		const db = client.db('workshop');
		const collection = db.collection('carts');

		function insert(err) {
			if (err) throw err;

			if (count++ === max) {
				return client.close();
			}

			collection.insertOne({
				cart: parseInt(Math.random() * 100),
				quantity: parseInt(Math.random() * 10) + 1,
				price: Math.random() * 1000,
			}, insert);
		}

		insert();
		res.send('load exitoso');
	} catch (error) {
		next(error);
	}
});

app.get('/carts/:id', async function getCartsById(req, res, next) {
	try {
		const client = await getConnectionMongo();

		const db = client.db('workshop');
		const collection = db.collection('carts');
		const cart = parseInt(req.params.id);

    collection.find({ cart }).toArray((err, results) => {

      const total = results.reduce((a, e) => a += e.price * e.quantity, 0);

      res.send({ total });
    });
	} catch (error) {
		next(error);
	}

});

app.listen(port, function init() {
	console.log(`app listening on port ${port}!`);
});

app.use(function handleError(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});