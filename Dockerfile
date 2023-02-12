FROM ubuntu:20.04

WORKDIR /app

COPY ./docker-compose.yml .
COPY ./run.sh .

RUN apt-get update \
   && apt-get upgrade -y \
   && apt-get install -y docker.io 
CMD [ "sh", "run.sh"]
