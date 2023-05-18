FROM postgres:latest
LABEL author="Your Name"
LABEL description="Postgres Image for demo"
LABEL version="1.0"

COPY dbvol/*.sql /docker-entrypoint-initdb.d/