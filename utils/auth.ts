import { clearAll, get, set } from '@/utils/storage';
import { configValue } from '@/configs';

import { AuthTokens } from '@/types';

const { REFRESH_TOKEN_KEY, AUTH_TOKEN_KEY, EXPIRES_IN } = configValue;

export const getAuthToken = (): AuthTokens => {
  return {
    access_token: get(AUTH_TOKEN_KEY),
    expires_in: get(REFRESH_TOKEN_KEY),
    refresh_token: get(EXPIRES_IN),
  };
};

export function setAuthToken({
  access_token,
  expires_in,
  refresh_token,
}: AuthTokens) {
  set(AUTH_TOKEN_KEY, access_token);
  set(REFRESH_TOKEN_KEY, refresh_token);
  set(EXPIRES_IN, `${expires_in}`);
}

export function removeAuthToken() {
  return clearAll();
}

export function checkHasAuthToken() {
  const token = get(AUTH_TOKEN_KEY);
  if (!token) return false;
  return true;
}
