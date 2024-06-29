/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    //private readonly prisma
    private readonly configService: ConfigService,
  ) {}

  //register user service
  async register(registetDto: RegisterDto) {
    const { name, email, password } = registetDto;
    const user = {
      name,
      email,
      password,
    };

    return user;
  }

  //login user service

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    };

    return user;
  }

  //get all users service
  async getUsers() {
    const users = [
      {
        id: '1234',
        name: 'Test',
        email: 'abc@gmail.com',
        password: '123456f',
      },
    ];
    return users;
  }
}
