rem set DEBUG=shaderlib:* & npm start

supervisor --debug -i public/ -w db,routes,views,app.js ./bin/www