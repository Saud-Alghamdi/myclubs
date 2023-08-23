import axios from "axios";
import {
  FavoriteClubMatch,
  Club,
  FavoriteClubMatchAPIResponse,
  FavoriteClubsMatchesReturnType,
} from "../types/customTypes";
import { getFavoriteClubs } from "../services/clubServices";
import {
  removeDuplicateMatches,
  convertTimestampToDateAndTime,
} from "../helpers/helpers";
import { sortBy } from "lodash";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const MATCHES_ENDPOINT = "/fixtures";
const NEXT = "10";
const MATCHES_LOCALSTORAGE_KEY = "matches";

export const getFavoriteClubsMatches = async (
  userId: string,
): Promise<FavoriteClubsMatchesReturnType> => {
  const storedMatches = localStorage.getItem(MATCHES_LOCALSTORAGE_KEY);
  const storedMatchesExpiry = localStorage.getItem(
    MATCHES_LOCALSTORAGE_KEY + "_expiry",
  );

  if (storedMatches && storedMatchesExpiry) {
    const expiryDate = new Date(JSON.parse(storedMatchesExpiry));
    if (new Date() < expiryDate) {
      const result = {
      const result = {
        isSuccess: true,
        msg: "Successfully fetched favorite clubs' matches from local storage",
        data: JSON.parse(storedMatches),
      };
      console.log(result.msg);
      return result;
    }
  }

  try {
    const { isSuccess, data } = await getFavoriteClubs(userId);

    if (!isSuccess || !data) {
      return {
        isSuccess: false,
        msg: "Failed to fetch favorite clubs",
      };
    }

    const favoriteClubIds: number[] = data.map((club: Club) => club.id);

    const getMatchesForClub = async (
      clubId: number,
    ): Promise<FavoriteClubMatch[]> => {
      const options = {
        method: "GET",
        url: `${BASE_URL}${MATCHES_ENDPOINT}`,
        params: {
          team: clubId,
          next: NEXT,
        },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
      };

      const response = await axios.request<{
        response: FavoriteClubMatchAPIResponse[];
      }>(options);
      return response.data.response.map(
        (matchData: FavoriteClubMatchAPIResponse) => {
          const timestamp = Number(matchData.fixture.timestamp);
          const { date, time } = convertTimestampToDateAndTime(timestamp);

          return {
            club1Id: matchData.teams.home.id,
            club1Name: matchData.teams.home.name,
            club1Logo: matchData.teams.home.logo,
            club2Id: matchData.teams.away.id,
            club2Name: matchData.teams.away.name,
            club2Logo: matchData.teams.away.logo,
            matchId: matchData.fixture.id,
            date,
            time,
          };
        },
      );
    };

    const matchesPromises = favoriteClubIds.map(getMatchesForClub);
    const matchesArrays = await Promise.all(matchesPromises);

    // flat() squashes the arrays into one single array
    let matchesData = removeDuplicateMatches(matchesArrays.flat());

    // Sort matches by date and time. This modifies the original array.
    matchesData = sortBy(matchesData, (match) => {
      const dateTime = new Date(`${match.date} ${match.time}`);
      return dateTime.getTime();
    });

    // Store the data along with an expiration date 24 hours from now
    localStorage.setItem(MATCHES_LOCALSTORAGE_KEY, JSON.stringify(matchesData));
    const expiryDate = new Date();

    // Set the expiry date to 24 hours from now
    expiryDate.setDate(expiryDate.getDate() + 1);
    localStorage.setItem(
      MATCHES_LOCALSTORAGE_KEY + "_expiry",
      JSON.stringify(expiryDate),
    );

    const result = {
    const result = {
      isSuccess: true,
      msg: "Successfully fetched favorite clubs' matches",
      data: matchesData,
    };
    console.log(result.msg);
    return result;
    console.log(result.msg);
    return result;
  } catch (error) {
    let errorMessage = "Failed to fetch favorite clubs' matches";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    const result = {
    const result = {
      isSuccess: false,
      msg: errorMessage,
    };
    console.log(
      `Error inside getFavoriteMatches.ts, inside getFavoriteClubsMatches function. ${result.msg}`,
    );
    return result;
  }
};
