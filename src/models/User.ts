import { ObjectId } from "mongodb";

export interface User {
    username: string;
    email: string;
    password: string;
    profilePic: string;
    timestamp: string;
}