import axios from "axios";
import SuperHero from "../models/SuperHero";
const api = axios.create({
  baseURL: "https://superheroapi.com/api.php/2797210390384213/",
  headers: {},
});

export async function getSuperHeroById(id: number): Promise<SuperHero> {
  try {
    const response = await api.get(`${id}`);

    return response.data;
  } catch (err) {
    return {} as SuperHero;
  }
}
