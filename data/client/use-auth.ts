import { useRouter } from 'next/navigation';
import { create } from 'zustand';

import {
  checkHasAuthToken,
  getAuthToken,
  removeAuthToken,
  setAuthToken,
} from '@/utils';
import { routes } from '@/configs';

import { AuthResponse } from '@/types';
interface AuthStoreInterface {
  isAuthorized: boolean;
  setAuthorized: (value: boolean) => void;
}

const useAuthStore = create<AuthStoreInterface>(set => ({
  isAuthorized: checkHasAuthToken(),
  setAuthorized: value => set(() => ({ isAuthorized: value })),
}));

export default function useAuth() {
  const router = useRouter();
  const { isAuthorized, setAuthorized } = useAuthStore(state => state);
  // const auth = checkHasAuthToken();
  // useLayoutEffect(() => {
  //   setAuthorized(auth);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [auth]);

  return {
    setToken: setAuthToken,
    getToken: getAuthToken,
    removeToken: removeAuthToken,
    setAuthorized,
    isAuthorized,
    authorize(authTokens: AuthResponse) {
      setAuthToken(authTokens);
      setAuthorized(true);
    },
    unauthorize() {
      setAuthorized(false);
      removeAuthToken();
      router.replace(routes.home);
    },
  };
}
