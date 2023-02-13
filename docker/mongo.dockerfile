FROM mongo:latest
WORKDIR /app
COPY ./database/mongod.yaml /app/
COPY ./database/run.sh /app/
EXPOSE 27017
CMD ["/bin/sh", "/app/run.sh"]