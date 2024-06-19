export interface AuthResponse extends AuthTokens {
  token_type: string;
  scope: string;
}
export interface AuthTokens {
  access_token: string;
  expires_in: number;
  refresh_token: string;
}
export type RefreshTokenResponse = AuthResponse;
