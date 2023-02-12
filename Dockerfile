FROM docker

WORKDIR /app

COPY ./docker-compose.yml .
COPY ./run.sh .

CMD [ "/bin/sh", "run.sh"]
