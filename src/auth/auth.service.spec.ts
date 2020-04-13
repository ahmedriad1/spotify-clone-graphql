import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { setGlobalMockMethod, toMockedInstance } from 'to-mock';

import { AuthService } from './auth.service';

setGlobalMockMethod(jest.fn);

describe('AuthService', () => {
    let service: AuthService;
    let jwtService: jest.Mocked<JwtService>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: JwtService,
                    useValue: toMockedInstance(JwtService),
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
