FROM hayd/alpine-deno:latest

EXPOSE 8080

WORKDIR /usr/app

COPY . .

CMD ["run", "--unstable", "--allow-net", "server.ts"]
