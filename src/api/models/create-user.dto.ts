export class CreateUserDto {
    email: string;
    username: string;
    password: string;
}

export class CreateUserEnvelope {
    user: CreateUserDto;
}
