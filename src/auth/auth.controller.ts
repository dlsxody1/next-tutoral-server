import { AuthDto } from './AuthDto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('signup')
export class AuthController {
  @Post()
  register(@Body() authDto: AuthDto) {
    return authDto;
  }
}
