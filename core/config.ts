import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    baseUrl: process.env.BASE_URL_BRANDA,
    apiUrl: process.env.API_URL_BRANDA,
};