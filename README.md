# [Workshop] - Profiling & Analizys Node.js Applications
Aprenderemos a analizar y diagnosticar problemas de cuello de botella, deterioración de un servicio, excesos de cargas, entre otros, los cuales suelen ser las situaciones problemáticas más comunes en aplicaciones de Node.js. Todo esto haciendo uso de buenas practicas con ayuda flamegraphs, stacks, snapshots, profiles, y procedimientos a tener en cuenta a la hora de analizar estos casos, con lo mas importante, como solucionarlos.

## Requeriments
* Node.js (min v8.5.x)
* `npm`
* `Google Chrome`: Developer Tools for Profiling
* `Docker`: in case you don’t want to run the script and install deps in your system, specially the exercises with Mongo.
* `ab`: Load test. This should already be installed on modern macOS, check how to install this on your system.
* `wrk`: Load test.
* `N|Solid`: Install the latest version.
* `ndb`: Specially for Profiling


Install N|Solid in Mac using Brew
```
brew tap nodesource/nsolid

brew install nsolid-console
```

Install n|Solid and running in Windows(needed docker)

```
docker run -d -p 9001-9003:9001-9003 -p 6743:6753 -v /path/to/persistent/console:/var/lib/nsolid/console --name console --network docker_nsolid nodesource/nsolid-console
```