FROM mongo:latest

WORKDIR /app
COPY mongod.yaml /app/
EXPOSE 27017

CMD ["mongod", "--config", "/database/mongod.yaml"]