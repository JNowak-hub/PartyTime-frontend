export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  login: string;
  email: string;
  password: string;
  birthDate?: Date;
  provider: string;
}
