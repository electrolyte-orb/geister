FROM docker

WORKDIR /app

COPY ./docker-compose.yml .
COPY ./run.sh .

EXPOSE 3000

VOLUME ["/var/run/docker.sock", "/var/run/docker.sock"]

CMD [ "/bin/sh", "run.sh"]
