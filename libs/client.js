import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "blogservice-with-next",
	apiKey: process.env.API_KEY,
});