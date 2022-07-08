import { Movie } from "./movies";

export interface Api{
    page: number;
    results: Movie[];
}