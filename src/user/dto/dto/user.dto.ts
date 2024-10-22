import { IsEmail, IsString } from 'class-validator';

//DTO to validate input data coming from body of http request
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
