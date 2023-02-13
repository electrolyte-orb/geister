FROM mongo:latest
EXPOSE 27017

CMD ["mongod", "--tlsMode", "disabled"]