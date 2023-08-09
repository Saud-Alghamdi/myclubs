import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Club, ClubResponse } from "../types/customTypes";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TEAMS_ENDPOINT = "/teams";
const LEAGUE_IDS = [39, 135, 71, 307, 140, 79, 61]; // Respect Order --> England, Italy, Brazil, Saudi, Spain, Germany, France

const fetchClubs = async (): Promise<Club[]> => {
  const fetchClubsForLeague = async (leagueId: number): Promise<Club[]> => {
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

    const response = await axios.request<{ response: ClubResponse[] }>(options);
    return response.data.response.map((club: ClubResponse) => ({
      id: club.team.id,
      name: club.team.name,
      logo: club.team.logo,
    }));
  };

  const promises = LEAGUE_IDS.map(fetchClubsForLeague);
  const clubsArrays = await Promise.all(promises);

  // flat() squashes the arrays into one single array
  const clubsData = clubsArrays.flat();
  localStorage.setItem("clubsData", JSON.stringify(clubsData));
  return clubsData;
};

export const useClubs = () => {
  const localData = localStorage.getItem("clubsData");
  const parsedLocalStorageData = localData ? JSON.parse(localData) : null;

  return useQuery<Club[], Error>(["clubs"], fetchClubs, {
    enabled: !parsedLocalStorageData,
    initialData: parsedLocalStorageData,
  });
};
