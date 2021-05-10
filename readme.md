# Camerons Deno Rest API

## Environment

This project uses docker v3.3.1 to run a deno container and a postgresql database container. I am currently using the most recent version of deno which may change in future if I decide to stick to the current one and only update when a new major version of deno comes out.

None of the deno dependencies I use are versioned which is a potential issue as if the code changes this application may break. To see the progress of this check the kanban board I have for this github project. (Github jira board).

## How to run

To run this application you need to have docker installed and then you can run:
```
docker compose up
```

This will spin up a container running the latest deno and a postgres container. If this is the first time running you will need to add a database to the postgres container.<br><br>
To do this you need to access the shell of the docker container and run the following:

```
psql -U postgres
```
Use username as specified in the docker compose file (this will log you in to the postgres instance)

```
CREATE DATABASE denotesting;
```
This will create a database called denotesting. If you wish to use a different name then you need to update it in the db config prior to running the docker containers

## Helpful info

I think this is a potential issue with how i'm using docker but when I make a change to the dockerfile it caches itself meaning it won't use the updated dockerfile. The work around fix for this is to remove all containers<br>
```
docker system prune -a
```
