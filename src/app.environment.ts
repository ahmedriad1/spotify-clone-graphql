import { Logger } from '@nestjs/common';
import { GqlModuleOptions } from '@nestjs/graphql';
import { Env } from '@nestjs-steroids/environment';
import { ApolloErrorConverter } from 'apollo-error-converter';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';

enum NodeEnvironment {
    Development = 'development',
    Production = 'production',
    Test = 'test',
}

class AppEnvironment {
    /**
     * Env decorator mark environment variable that we want to assign
     * (Tip) Without name env Env decorator makes auto UPPER_SNAKE_CASE conversion (e.g. isTest -> IS_TEST)
     */
    @Env('PORT')
    /**
     * Transform is useful for all sorts of transformations or parsing complex values
     * For example: @Transform(value => value.toLowerCase() === 'true')
     */
    @Transform(({ value }) => Number.parseInt(value, 10))
    /**
     * Also, you could use class-validator operators for validation of the correctness of environment variables
     */
    @IsNumber()
    @Min(0)
    @Max(65535)
    readonly port = 3000;

    @Env('NODE_ENV')
    @IsEnum(NodeEnvironment)
    readonly nodeEnvironment = NodeEnvironment.Development;

    isDevelopment() {
        return this.nodeEnvironment === NodeEnvironment.Development;
    }

    @Env('GRAPHQL_ENDPOINT')
    readonly graphqlEndpoint = `http://localhost:3000/graphql`;

    readonly accessTokenExpiresIn = 18 * 3600 * 1000;
    readonly refreshTokenExpiresIn = 30 * 24 * 3600 * 1000; // 30 days

    @Env('JWT_SECRET_KEY')
    readonly jwtSecretKey = '';

    @Env('CLOUDINARY_CLOUD_NAME')
    readonly cloudinaryCloudName = '';

    @Env('CLOUDINARY_API_KEY')
    readonly cloudinaryApiKey = '';

    @Env('CLOUDINARY_API_SECRET')
    readonly cloudinaryApiSecret = '';

    cloudinaryBaseUrl() {
        return `https://res.cloudinary.com/${this.cloudinaryCloudName}`;
    }
}

interface MyGqlOptions extends GqlModuleOptions {
    context: (data) => Record<string, any>;
}

const graphqlModuleFactory = async (logger: Logger): Promise<MyGqlOptions> => {
    return {
        tracing: false,
        sortSchema: true,
        autoSchemaFile: '~schema.gql',
        installSubscriptionHandlers: true,
        subscriptions: {
            keepAlive: 5000,
        },
        context: (data: any) => {
            return {
                token: undefined as string | undefined,
                refreshToken: undefined as string | undefined,
                req: data.req as Request,
            };
        },
        formatError: new ApolloErrorConverter({
            logger: logger.error.bind(logger),
            errorMap: [
                {
                    404: {
                        code: '404',
                        message: 'Not found',
                        data: ({ response: { error, ...rest } }) => {
                            return rest;
                        },
                    },
                    400: {
                        code: '400',
                        message: 'Validation Error',
                        data: ({ response: { error, ...rest } }) => {
                            return rest;
                        },
                    },
                    401: {
                        code: '401',
                        message: 'Unauthorized',
                        data: ({ response: { error, ...rest } }) => {
                            return rest;
                        },
                    },
                },
            ],
        }),
    };
};

export { AppEnvironment, graphqlModuleFactory };
