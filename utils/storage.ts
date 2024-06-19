import store from 'store2';
const prefix = 'webapp';
export const get = (key: string) => store.local.get(`${prefix}.${key}`);
export const remove = (key: string) => store.local.remove(`${prefix}.${key}`);
export const set = (key: string, value: string | boolean) =>
  store.local.set(`${prefix}.${key}`, value);
export const clearAll = () => store.local.clearAll();
