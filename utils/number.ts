// import BigNumber from 'bignumber.js';
// import isNumber from 'lodash/isNumber';
export const isNumber = (val: any) => typeof val === 'number' && val === val;
export function convertNumberToBigInt(numberValue: number, decimals: number) {
  if (!numberValue) return BigInt(0);
  const multiplier = 10 ** decimals;
  const bigIntValue = BigInt(Math.floor(numberValue * multiplier));
  return bigIntValue;
}

export const formatNumber = (amount: string | number, decimals = 2) => {
  if (!amount) return 0;
  const vals: any =
    typeof amount == 'number'
      ? amount?.toString()?.split('.')
      : amount?.split('.');
  const formattedString = `${vals[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${
    vals.length >= 2 ? '.' : ''
  }${vals[1]?.substring(0, decimals) ?? ''}`;
  return formattedString;
};
