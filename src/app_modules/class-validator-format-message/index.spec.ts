import { ValidationError } from '@nestjs/common';
import { stripIndents } from 'common-tags';

import { classValidatorFormatMessage } from '.';

describe('classValidatorFormatMessage', () => {
    it('single error object', () => {
        const error: Partial<ValidationError> = {
            value: 'aa@mai1l1',
            property: 'email',
            children: [],
            constraints: {
                isEmail: 'email must be an email',
            },
        };
        expect(classValidatorFormatMessage([error] as ValidationError[])).toEqual(stripIndents`
        email: email must be an email (isEmail).
        `);
    });

    it('several errors with single constraint', () => {
        const errors: Partial<ValidationError>[] = [
            {
                value: '',
                property: 'name',
                children: [],
                constraints: {
                    minLength: 'name must be longer than or equal to 3 characters',
                },
            },
            {
                value: '',
                property: 'password',
                children: [],
                constraints: {
                    isNotEmpty: 'password should not be empty',
                },
            },
        ];
        expect(classValidatorFormatMessage(errors as ValidationError[])).toEqual(stripIndents`
        name: name must be longer than or equal to 3 characters (minLength),
        password: password should not be empty (isNotEmpty).
        `);
    });

    it('single error with multiple constraints', () => {
        const errors: Partial<ValidationError>[] = [
            {
                value: '',
                property: 'name',
                children: [],
                constraints: {
                    minLength: 'minLength error message',
                    isNotEmpty: 'name should not be empty',
                },
            },
        ];
        expect(classValidatorFormatMessage(errors as ValidationError[])).toEqual(stripIndents`
            name: minLength error message (minLength),
            name: name should not be empty (isNotEmpty).
        `);
    });

    it('single with nested', () => {
        const errors: Partial<ValidationError>[] = [
            {
                property: 'user',
                children: [
                    ({
                        property: 'name',
                        constraints: { alnum: 'alnum error' },
                    } as unknown) as ValidationError,
                ],
                constraints: {
                    isNotEmpty: 'should not be empty',
                },
            },
        ];
        expect(classValidatorFormatMessage(errors as ValidationError[])).toEqual(stripIndents`
            user: should not be empty (isNotEmpty),
            user.name: alnum error (alnum).
        `);
    });
});
