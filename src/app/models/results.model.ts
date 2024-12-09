export interface ResultState {
  results: Array<Result>;
}

export interface Result {
  id: number;
  username: string;
  rollNumber: number;
  score: number;
}
