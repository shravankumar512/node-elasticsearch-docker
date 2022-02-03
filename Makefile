
dc-build:
	docker-compose build app

start: dc-build
	docker-compose run --service-ports --entrypoint=npm app run start