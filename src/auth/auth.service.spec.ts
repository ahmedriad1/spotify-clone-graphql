import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { setGlobalMockMethod, toMockedInstance } from 'to-mock';

import { AuthService } from './auth.service';

setGlobalMockMethod(jest.fn);

describe('AuthService', () => {
    let service: AuthService;
    let jwtService: jest.Mocked<JwtService>;
    let configService: jest.Mocked<ConfigService>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: JwtService,
                    useValue: toMockedInstance(JwtService),
                },
                {
                    provide: ConfigService,
                    useValue: toMockedInstance(ConfigService),
                },
            ],
        }).compile();

        service = module.get(AuthService);
        jwtService = module.get(JwtService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
