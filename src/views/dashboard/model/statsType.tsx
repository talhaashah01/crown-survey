interface Stat {
  year: number;
  month: number;
  count: number;
}

export default interface StatsType {
  userCount: number | string;
  bookingsCount: number | string;
  stats: Stat[];
}
