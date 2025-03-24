import { ICreateUser, ILoginUser } from "@/interfaces/auths";


export class AuthService {
    public static async login(user: ILoginUser) {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...user }),
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error('Login failed');
    };

    public static async signup(user: ICreateUser) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...user }),
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error('Signup failed');
    }
}