import {ObjectId} from "mongodb";
import {Category} from "./Category";

export interface Post {
    title:string;
    description: string;
    photo?: string;
    username: string;
    category: Category[];

}
