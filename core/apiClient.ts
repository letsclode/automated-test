import axios from "axios";
import { config } from "./config.js";

export class ApiClient {
    baseUrl: string;

    constructor() {
        this.baseUrl = config.apiUrl!;
    }

    async get(path: string) {
        return axios.get(`${this.baseUrl}${path}`);
    }

    async post(path: string, data: any) {
        return axios.post(`${this.baseUrl}${path}`, data);
    }
}