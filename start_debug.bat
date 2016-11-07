rem set DEBUG=shaderlib:* & npm start

supervisor --debug -i public/ -w db,routes,views,models,app.js ./bin/www