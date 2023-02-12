docker pull mongo
docker pull ghcr.io/electrolyte-orb/back4app-image-geister:latest
docker run -d -p 3000:3000 ghcr.io/electrolyte-orb/back4app-image-geister:latest