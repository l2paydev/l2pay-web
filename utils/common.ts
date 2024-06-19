import { StaticImageData } from 'next/image';

export function isImage(url: string) {
  return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
export function getUrlImage(
  url: string | undefined,
  fbUrl: string | StaticImageData
) {
  if (url && isImage(url)) return url;
  return fbUrl;
}
export function getIdSectionByHash(hash: string) {
  return hash.replace('#', '');
}

export const getAdd = (address: string, number = 6, prefix = '...') => {
  if (!address) return;
  const minLength = number * 2 + prefix?.length;
  if (address?.length > minLength)
    return `${address.slice(0, number)}${prefix}${address.slice(-number)}`;
  return address;
};
