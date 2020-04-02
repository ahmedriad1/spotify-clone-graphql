import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from '../user/models/user';

/**
 * Use jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Token') if you have
 * non-standard scheme name.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly jwtService: JwtService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY,
        });
    }

    /**
     * `user` should be an object supplied by the application after it
     * has been given an opportunity to verify credentials.
     * Will be written to request.user (by default, but it is configurable)
     * `info` is an optional argument containing additional user information.
     * Will be written to request.authInfo.
     * Also, if (error happens) error info will be here too {message, name})
     */
    public async validate(payload: any): Promise<[User, any /*Info*/]> {
        const user: any = { email: payload.email, id: payload.sub };
        return [user, payload];
    }
}
