export interface Listing {
  slackTS: string;
  channel: string;
  owner: string;
  heading: string;
  featureUrl?: string;
  description: string;
  startPrice: number;
  reservePrice: number;
  buyNowPrice?: number;
  startTimestamp: number;
  duration: Duration;
  expireTimestamp: number;
}

export interface CreateListingModel {
  channel: string;
  owner: string;
  heading: string;
}

export type Duration = '3 days' | '1 day' | '4 hours' | '2 hours' | '1 hour';

export const durationInMs: { [duration in Duration]: number } = {
  '3 days': 1000 * 60 * 60 * 24 * 3,
  '1 day': 1000 * 60 * 60 * 24,
  '4 hours': 1000 * 60 * 60 * 4,
  '2 hours': 1000 * 60 * 60 * 2,
  '1 hour': 1000 * 60 * 60,
};
