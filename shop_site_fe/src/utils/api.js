import axios from "axios";
import { API_BASE_URL } from "../config";

export default function apiCall() {
	return axios.create({
		baseURL: API_BASE_URL,
	});
}