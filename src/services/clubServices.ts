import { remove, ref, get, set } from "firebase/database";
import db from "../firebase/db";
import { Club, ClubsApiResponse } from "../types/customTypes";
import { ClubsQueryType } from "../types/customTypes";
import { clearMatchesFromLocalStorage } from "../helpers/helpers";
import axios from "axios";

///---------------------------------------///
///-----      GET ALL CLUBS           ----///
///---------------------------------------///
export async function getAllClubs(): Promise<ClubsQueryType> {
  try {
    const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
    const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const SEASON = "2023";
    const TEAMS_ENDPOINT = "/teams";
    const LEAGUE_IDS = [39, 135, 71, 307, 140, 79, 61, 307]; // England, Italy, Brazil, Saudi, Spain, Germany, France

    const fetchClubsForLeague = async (leagueId: number): Promise<Club[]> => {
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

    const promises = LEAGUE_IDS.map(fetchClubsForLeague);
    const clubsArrays = await Promise.all(promises);

    // flat() squashes the arrays into one single array, and in this case, an array of objects
    const clubsData = clubsArrays.flat();

    return {
      isSuccess: true,
      msg: "Data loaded successfully",
      data: clubsData,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { isSuccess: false, msg: error.message };
    } else {
      return { isSuccess: false, msg: "Unknown error occurred" };
    }
  }
}

///---------------------------------------///
///-----      GET FAVORITE CLUBS      ----///
///---------------------------------------///
export async function getFavoriteClubs(
  userId: string,
): Promise<ClubsQueryType> {
  if (!userId) {
    return { isSuccess: false, msg: "No user is currently signed in." };
  }

  const dbRef = ref(db, `/favoriteClubs/${userId}`);

  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      return {
        isSuccess: true,
        msg: "Data loaded successfully",
        data: Object.values(data).map((club) => club as Club), // Firebase returns the favorite clubs data as an object, but this converts it into an array of objects
      };
    } else {
      return {
        isSuccess: false,
        msg: "No data available",
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { isSuccess: false, msg: error.message };
    } else {
      return { isSuccess: false, msg: "Unknown error occurred" };
    }
  }
}

///---------------------------------------///
///-----      ADD FAVORITE CLUB       ----///
///---------------------------------------///

export async function addFavoriteClub(
  userId: string,
  club: Club,
): Promise<ClubsQueryType> {
  if (!userId) {
    return { isSuccess: false, msg: "No user is currently signed in." };
  }

  const dbRef = ref(db, `/favoriteClubs/${userId}/${club.id}`);

  try {
    // Fetch the club
    const snapshot = await get(dbRef);
    // Check if the club already exists
    if (snapshot.exists()) {
      return { isSuccess: false, msg: "Club already exists in favorites." };
    }

    await set(dbRef, club);
    clearMatchesFromLocalStorage();
    return { isSuccess: true, msg: "Data written successfully" };
  } catch (error) {
    if (error instanceof Error) {
      return { isSuccess: false, msg: error.message };
    } else {
      return { isSuccess: false, msg: "Unknown error occurred" };
    }
  }
}

///---------------------------------------///
///-----   REMOVE FAVORITE CLUB       ----///
///---------------------------------------///
export async function removeFavoriteClub(
  userId: string,
  clubId: number,
): Promise<ClubsQueryType> {
  if (!userId) {
    return { isSuccess: false, msg: "No user is currently signed in." };
  }

  const dbRef = ref(db, `/favoriteClubs/${userId}/${clubId}`);

  try {
    // Fetch the club
    const snapshot = await get(dbRef);
    // Check if the club exists
    if (!snapshot.exists()) {
      return { isSuccess: false, msg: "Club not found in favorites." };
    }

    await remove(dbRef);
    clearMatchesFromLocalStorage();
    return {
      isSuccess: true,
      msg: "Club removed from favorites successfully",
    };
  } catch (error) {
    if (error instanceof Error) {
      return { isSuccess: false, msg: error.message };
    } else {
      return { isSuccess: false, msg: "Unknown error occurred" };
    }
  }
}
