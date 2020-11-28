import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { instance, mock } from 'ts-mockito';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let service: AuthService;
    let jwtService = mock(JwtService);
    let configService = mock(ConfigService);

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: JwtService,
                    useValue: instance(jwtService),
                },
                {
                    provide: ConfigService,
                    useValue: instance(configService),
                },
            ],
        }).compile();

        service = module.get(AuthService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
