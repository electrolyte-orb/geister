FROM mongo:latest

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "mongo", "--version" ]

EXPOSE 27017
