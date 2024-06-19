import axios from 'axios';

export const errorMessageFields: Record<string, string> = {
  ERR_NETWORK: 'Check your connection and try again.',
  1: 'You cannot claim referral bonus at this time',
  500: 'Something went wrong.\nPlease try again',
  100: 'Cannot register \nPlease recheck your information',
  102: 'Username or password is invalid',
  6603: 'You are playing as Guest',
  6604: 'You are not as Guest',
  6605: 'Your session has expired',
  6704: 'You are already finding for a match',
  6705: 'You do not have enough balance',
  6601: 'You has been disconnected',
  6602: 'You account has been banned',
  6801: 'Your referral code is invalid',
  1000: 'The email does not exist',
  6900: "Oops! You've used up all your spins for today.",
};

export function getFormErrors(err: any) {
  if (axios.isAxiosError(err)) {
    const { error_description, error } = err?.response?.data || {};
    return error_description?.message ?? error;
  } else {
    return err?.shortMessage || err?.message;
  }
}

export function getFieldErrors(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error?.response?.data?.errors;
  }
  return null;
}
