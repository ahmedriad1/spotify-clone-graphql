import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { accessTokenExpiresIn, refreshTokenExpiresIn } from './auth.constants';
import { LoginFieldsModel } from './models/login-fields';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(data: LoginFieldsModel): Promise<any> {
        const user = await this.userService.findOneByCredentials({
            email: data.email,
            password: data.password,
        });
        if (!user) {
            throw new UnauthorizedException();
        }
        // const refreshToken = v4();
        const date = new Date();

        return {
            accessToken: this.jwtService.sign(
                { email: user.email },
                { expiresIn: accessTokenExpiresIn / 1000 },
            ),
            refreshToken: '', // todo: create refresh token
            accessTokenExpiresAt: date.getTime() + accessTokenExpiresIn,
            refreshTokenExpiresAt: date.getTime() + refreshTokenExpiresIn,
        };
    }
}
