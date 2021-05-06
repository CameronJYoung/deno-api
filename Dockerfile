FROM hayd/alpine-deno:1.9.2

EXPOSE 8080

WORKDIR /usr/app

COPY deps.ts .
RUN deno cache --unstable deps.ts

COPY . .
RUN deno cache --unstable server.ts

ENTRYPOINT [ "deno" ]

CMD ["run", "--unstable", "--allow-net", "server.ts"]
