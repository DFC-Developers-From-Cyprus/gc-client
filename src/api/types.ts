export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    is_active: boolean;
  };
}
