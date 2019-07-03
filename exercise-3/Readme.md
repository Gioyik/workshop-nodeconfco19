# WorkShop NodeConf

Requisitos:

instalar autocannon globalmente
```
npm install autocannon -g
```

condiciones de chequeos

```
node --version => 8 or higher
npm --version => 6 or higher
docker --version => 18 or higher
```

Herramientas utilizadas

ExpressJS
	dentro de la carpeta exercise-3, mostraremos un ejercicio usando express y mongodb
	npm install
	npm run dev
	hay varias rutas
		http://localhost:3001 es un hola mundo
		http://localhost:3001/load  carga data en MongoDB
		http://localhost:3001/carts/<id> retorna el precio total del carrito, basado en su ID
	ahora vamos a hacer profiling

	npm run dev-nsolid, sólo eso...guao!!!!!
	ir a la consola http://localhost:6753

