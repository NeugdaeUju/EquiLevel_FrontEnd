export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId: string;
  token: string;
}

export interface SignupResponse {
  message: string;
}

export interface AuthState {
  token: string | null;
  userId: string | null;
  isAuthenticated: boolean;
}