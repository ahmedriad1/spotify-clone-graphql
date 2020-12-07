FROM node:14-alpine AS base
WORKDIR /app
ENV DATABASE_URL file:data.db
ENV JWT_SECRET_KEY secret_key

FROM base AS build
# install tools
RUN apk update \
    && apk add jq \
    && rm -rf /var/cache/apk/*
# install dependencies
COPY . .
RUN npm ci
# build sources
RUN npm run build
RUN npm ci --production --ignore-scripts

# TODO use node-alpine when supported by prisma https://github.com/prisma/prisma2/issues/702
FROM base
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./
CMD ["node", "/app/src/main.js"]

# docker build . -t nestjs-graphql-prisma-realworld-example-app
# docker run -it -v "$PWD/data":/data -e DATABASE_URL=file:/data/db.sqlite -p 8080:3000 nestjs-graphql-prisma-realworld-example-app
# curl -i http://localhost:8080/api
# docker run -it nestjs-graphql-prisma-realworld-example-app sh
