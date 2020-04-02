import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '../user/models/user';
import { accessTokenExpiresIn, refreshTokenExpiresIn } from './auth.constants';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    /**
     * Returns accessToken.
     */
    async session(user: User) {
        // const refreshToken = v4();
        const date = new Date();

        return {
            accessToken: this.jwtService.sign(
                { sub: user.id, email: user.email },
                { expiresIn: accessTokenExpiresIn / 1000 },
            ),
            refreshToken: '', // todo: create refresh token
            accessTokenExpiresAt: date.getTime() + accessTokenExpiresIn,
            refreshTokenExpiresAt: date.getTime() + refreshTokenExpiresIn,
        };
    }
}
