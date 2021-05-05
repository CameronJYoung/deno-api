FROM hayd/alpine-deno:latest

EXPOSE 8080

WORKDIR /usr/app

COPY . .

RUN deno cache deps.ts 

CMD ["run", "--unstable", "--allow-net", "server.ts"]
