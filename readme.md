# ![RealWorld Example App](logo.png)

> ### NestJS, GraphQL and Prisma codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://github.com/gothinkster/realworld) [RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with **NestJS, GraphQL and Prisma** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **NestJS, GraphQL and Prisma** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

## Getting started

```sh
npm ci
npm start # http://localhost:3000/api
```

## How it works

Application is written using NestJS, GraphQL and Prisma, but since [backend API specification](<(https://github.com/gothinkster/realworld/tree/master/api)>) requires REST, we must wrap our application. So, REST API is a facade here and work as microservice which sends all requests
to graphql api.

### Project Structure

-   `src` - Main application source code
-   `src/api` - REST API wrapper under main application
-   `prisma` - DB toolkit to query, migrate and model your database
-   `@generated` - Generated code

## Run realword API end-to-end tests

```sh
1: npm run start:dev
2: npm run api:spec
```

## Known Issues

-   Password is not hashed
-   User's field `username` renamed to `name`

## Resources

-   [Backend API spec](https://github.com/gothinkster/realworld/tree/master/api)
-   [Postman collection](https://github.com/gothinkster/realworld/blob/master/api/Conduit.postman_collection.json) that you can use to test your API endpoints as you build your app.

## Todo

-   Update to Nest 7
-   Runnning test:e2e on CI
-   ArticleService.updateArticle() Updating tags does not workm check it later
