/* This API fetches all football clubs in season 2023 in these Leagues:
France League, Germany League, Brazil League, England League, Saudi League, Spain League, Italy League. */
import axios, { AxiosResponse } from "axios";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TEAMS_ENDPOINT = "/teams";
const LEAGUE_IDS = [39, 135, 71, 307, 140, 79, 61]; // Respect Order --> England, Italy, Brazil, Saudi, Spain, Germany, France
const LEAGUE_NAMES = [
  "Premier League",
  "Serie A",
  "Brazilian Serie A",
  "Saudi Professional League",
  "La Liga",
  "Bundesliga",
  "Ligue 1",
];

export async function getAllClubs() {
  const requests = LEAGUE_IDS.map((leagueId) => {
    const options = {
      method: "GET",
      url: `${BASE_URL}${TEAMS_ENDPOINT}`,
      params: {
        league: leagueId,
        season: "2023",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    };
    return axios.request(options);
  });

  try {
    const responses = await Promise.all(requests);
    let leagues = {};

    responses.forEach((response: AxiosResponse, index) => {
      const leagueName = LEAGUE_NAMES[index];
      const teams = response.data.response;

      let clubs = teams.map((team) => {
        const { name, logo } = team.team;
        return { clubName: name, logo };
      });

      leagues[leagueName] = clubs;
    });

    console.log(leagues);
    return leagues;
  } catch (error) {
    console.error(error);
  }
}
