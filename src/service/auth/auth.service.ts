import { Injectable, UnauthorizedException } from '@nestjs/common';
@Injectable()
export class AuthService {
    login(email: string, senha: string) {
        if (email === 'admin@empresa.com' && senha === '123456') {
            return { access_token: 'token-simples-123' };
        }
        throw new UnauthorizedException('Login inválido');
    }
}