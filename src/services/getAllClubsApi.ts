import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Leagues } from "../types/customTypes";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TEAMS_ENDPOINT = "/teams";
const LEAGUE_IDS = [39, 135, 71, 307, 140, 79, 61];
const LEAGUE_NAMES = [
  "Premier League",
  "Serie A",
  "Brazilian Serie A",
  "Saudi Professional League",
  "La Liga",
  "Bundesliga",
  "Ligue 1",
];

async function fetchAllClubs() {
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

  const responses = await Promise.all(requests);
  const leagues: Leagues = {};

  responses.forEach((response: AxiosResponse, index) => {
    const leagueName = LEAGUE_NAMES[index];
    const clubs = response.data.response;
    leagues[leagueName] = clubs;
  });

  return leagues;
}

export function useAllClubs() {
  let clubsData = localStorage.getItem("clubsData");

  // Parse the data from localstorage before using it
  if (clubsData) {
    clubsData = JSON.parse(clubsData);
  }

  const {
    data: queryData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["clubsData"], fetchAllClubs, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      localStorage.setItem("clubsData", JSON.stringify(data));
    },
    enabled: !clubsData, // only run the query if there's no data in local storage
  });

  // No need to parse here anymore since we've parsed above
  const data = clubsData || queryData;

  return { data, isLoading, isError, isSuccess };
}
