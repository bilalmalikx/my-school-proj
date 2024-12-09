import { ResultState } from "../models/results.model";


export const initialState: ResultState = {
  results: [
    { id: 1, username: "John", rollNumber: 1001, score: 90 },
    { id: 2, username: "Doe", rollNumber: 1002, score: 85 },
    { id: 3, username: "Alice", rollNumber: 1003, score: 88 },
    { id: 4, username: "Bob", rollNumber: 1004, score: 76 },
  ],
};
