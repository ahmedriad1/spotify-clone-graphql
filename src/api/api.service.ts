import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { GotQL, QueryType } from '../types';
import { CreateUserDto } from './models/create-user.dto';

@Injectable()
export class ApiService {
    constructor(
        private readonly config: ConfigService,
        @Inject('gotql') private readonly gotql: GotQL,
    ) {}

    async createUser(createUserDto: CreateUserDto) {
        const createUserData = {
            name: createUserDto.username,
            email: createUserDto.email,
            password: createUserDto.password,
        };
        return this.mutation({
            operation: {
                name: 'createUser',
                args: {
                    data: createUserData,
                },
                fields: ['email', 'name', 'bio', 'image'],
            },
        });
    }

    private async mutation(query: QueryType) {
        const endpoint = this.config.get('graphqlEndpoint');
        return this.gotql.mutation(endpoint, query, { errorStatusCode: 422 });
    }
}
