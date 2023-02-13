FROM mongo:latest

WORKDIR /database
COPY mongod.yaml /database/
EXPOSE 27017

CMD ["mongod", "--config", "/database/mongod.yaml"]