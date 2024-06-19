import { env } from '@/env.mjs';

export const routes = {
  home: '#',
  business: '#business',
  models: '#models',
  cores: '#cores',
  personal: '#personal',
  ecosystem: '#ecosystem',
  roadmap: '#roadmap',
  payment: '/payments',
  dashboard: 'https://testnet.l2pay.ing/dashboard/',
  developer: 'https://docs.l2pay.ing/schema/redoc',
  X: 'https://x.com/l2_pay',
  github: env.GITHUB_URL,
};
