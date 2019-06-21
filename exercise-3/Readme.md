# WorkShop NodeConf

Requisitos:

instalar artillery globalmente
```
npm install artillery -g
```

condiciones de chequeos

```
node --version => 8 or higher
npm --version => 6 or higher
docker --version => 18 or higher
```

Herramientas utilizadas

ExpressJS
	ir dentro de la carpeta /express: cd express
	npm install
	npm run dev
	hay varias rutas
		http://localhost:3001 es un hola mundo
		http://localhost:3001/load  carga data en MongoDB
		http://localhost:3001/carts/<id> retorna el precio total del carrito, basado en su ID
	ahora vamos a hacer profiling
	
	npm run dev-nsolid, sólo eso...guao!!!!!
	ir a la consola http://localhost:6753
	

NextJS
	ir dentro de la carpeta /next: cd next
	npm install
	npm run dev
	hay dos tipo de páginas
		una con http://localhost:3000 y http://localhost:300/ioblock


Artillery https://artillery.io/
	los escenesarios de carga son creado en la carpeta artillery.
	- next.yml
	- -next-ioblock.yml