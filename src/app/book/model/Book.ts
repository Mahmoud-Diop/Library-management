import { User } from "./User";

export interface Book {
    id: number;
    name: string;
    pages: number;
    user: User;//auteur

}