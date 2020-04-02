import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '../user/models/user';
import { accessTokenExpiresIn, refreshTokenExpiresIn } from './auth.constants';
import { SessionTokenFields } from './models/session-user-fields';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    /**
     * Returns accessToken.
     */
    async session(user: User) {
        // const refreshToken = v4();
        const date = new Date();

        const payload: SessionTokenFields = { sub: user.id, email: user.email };

        return {
            accessToken: await this.jwtService.signAsync(payload, {
                expiresIn: accessTokenExpiresIn / 1000,
            }),
            refreshToken: '', // todo: create refresh token
            accessTokenExpiresAt: date.getTime() + accessTokenExpiresIn,
            refreshTokenExpiresAt: date.getTime() + refreshTokenExpiresIn,
        };
    }
}
