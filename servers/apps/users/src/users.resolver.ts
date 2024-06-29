import { BadRequestException, Query } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RegisterDto } from './dto/user.dto';
import { RegisterRepose } from './types/user.types';
import { UsersService } from './users.service';

@Resolver('User')
export class UsesResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterRepose)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
  ): Promise<RegisterRepose> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill all the fields');
    }

    const user = await this.userService.register(registerDto);
    return { user };
  }

  @Query(() => [User])
  async getUsers() {
    return this.userService.getUsers();
  }
}
