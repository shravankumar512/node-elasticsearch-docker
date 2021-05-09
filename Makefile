
dc-build:
	docker-compose build app

start: dc-build
	docker-compose run --service-port --entrypoint=npm app run start