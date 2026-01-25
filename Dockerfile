FROM oven/bun:1 AS builder

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

FROM oven/bun:1

USER 1000:1000

WORKDIR /app

COPY --from=builder /app/.output /app/.output

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
