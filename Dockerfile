FROM mongo:latest

HEALTHCHECK --interval=10s --timeout=10s --start-period=30s --retries=3 CMD [ "mongosh", "--version" ]

EXPOSE 27017

