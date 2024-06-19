import { ISignal } from './common';

export interface PaymentInput extends ISignal {
  id: string;
}
export type StatePayment = 'OPEN' | 'PROCESSING' | 'SUCCEED' | 'EXPIRED';
export interface PaymentDetailResponse extends PaymentDetail {}
export interface PaymentDetail {
  id: number;
  updated_at: Date;
  created_at: Date;
  expired_at: Date;
  network: string;
  currency: string;
  value: number;
  pay_wallet: string;
  state: StatePayment;
  external_order_id: string;
  external_order_title: string;
  external_order_desc: string;
  external_image_url: string;
  tx_hash: string;
  paid_at: null;
  paid_asset: string;
  paid_amount: null;
  paid_usd_rate: null;
  fee_asset: string;
  fee_amount: null;
  net_asset: string;
  net_amount: null;
  metadata: null;
  pay_url: string;
}

export interface RateUsdResponse {
  rates: Rates;
}
export interface Rates {
  ETH: EthInfo;
  STRK: StrkInfo;
}

export interface EthInfo {
  prices: Prices;
  diff_24h: Diff;
  diff_7d: Diff;
  diff_30d: Diff;
}
export type StrkInfo = EthInfo;

export interface Diff {
  USD: string;
}

export interface Prices {
  USD: number;
}
