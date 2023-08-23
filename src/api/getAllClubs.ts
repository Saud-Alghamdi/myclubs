import axios from "axios";
import { Club, ClubsApiResponse, ClubsQueryType } from "../types/customTypes";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const SEASON = "2023";
const TEAMS_ENDPOINT = "/teams";
const LEAGUE_IDS = [39, 135, 71, 307, 140, 79, 61]; // Respect Order --> England, Italy, Brazil, Saudi, Spain, Germany, France

export const getAllClubs = async (): Promise<ClubsQueryType> => {
  // Try to get data from localStorage first
  const storedClubs = localStorage.getItem("clubs");
  if (storedClubs) {
    return JSON.parse(storedClubs);
  }

  try {
    const getClubsForLeague = async (leagueId: number): Promise<Club[]> => {
      const options = {
        method: "GET",
        url: `${BASE_URL}${TEAMS_ENDPOINT}`,
        params: {
          league: leagueId,
          season: SEASON,
        },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
      };

      const response = await axios.request<{ response: ClubsApiResponse[] }>(
        options,
      );
      return response.data.response.map((club: ClubsApiResponse) => ({
        id: club.team.id,
        name: club.team.name,
        logo: club.team.logo,
      }));
    };

    const promises = LEAGUE_IDS.map(getClubsForLeague);
    const clubsArrays = await Promise.all(promises);

    // flat() squashes the arrays into one single array
    const clubsData = clubsArrays.flat();

    const result = {
      isSuccess: true,
      msg: "Successfully fetched all clubs",
      data: clubsData,
    };
    console.log(result.msg);
    console.log(result.msg);

    // Store the result into localStorage for future use.
    localStorage.setItem("clubs", JSON.stringify(result));

    return result;
  } catch (error) {
    // Check if error is an instance of the Error class
    let errorMessage = "Failed to fetch all clubs";
    if (error instanceof Error) {
      // If it is, use its message
      errorMessage = error.message;
    }

    const result = {
      isSuccess: false,
      msg: errorMessage,
    };
    console.log(
      `Error inside getAllClubs.ts, inside getAllClubs function. ${result.msg}`,
    );
    return result;
  }
};
