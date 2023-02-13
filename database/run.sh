echo "$MDB_PEM" >> /app/mongodb.pem
echo "$MDB_CA" >> /app/mongo.pem

mongod --config /app/mongod.yaml