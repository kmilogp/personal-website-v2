FROM oven/bun:1 AS builder

WORKDIR /app

COPY . .

RUN bun install

ENV NITRO_PRSET=bun

RUN bun run build

FROM oven/bun:1

USER 1000:1000

WORKDIR /app

COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/drizzle.config.ts /app/drizzle.config.ts

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
