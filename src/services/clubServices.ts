import { remove, ref, get, set } from "firebase/database";
import db from "../firebase/db";
import { Club } from "../types/customTypes";
import { ClubsQueryType } from "../types/customTypes";
import { clearMatchesFromLocalStorage } from "../helpers/helpers";

///---------------------------------------///
///-----      GET FAVORITE CLUBS      ----///
///---------------------------------------///
export async function getFavoriteClubs(
  userId: string,
): Promise<ClubsQueryType> {
  if (!userId) {
    const result = { isSuccess: false, msg: "No user is currently signed in." };
    console.log(result.msg);
    return result;
  }

  const dbRef = ref(db, `/favoriteClubs/${userId}`);

  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const result = {
        isSuccess: true,
        msg: "Data loaded successfully",
        data: Object.values(data).map((club) => club as Club), // Firebase returns the favorite clubs data as an object, but this converts it into an array of objects
      };
      return result;
    } else {
      const result = {
        isSuccess: false,
        msg: "No favorite clubs data available",
      };
      console.log(
        `Error inside clubServices.ts, inside getFavoriteClubs function. ${result.msg}`,
      );
      return result;
    }
  } catch (error) {
    let errorMessage = "Unknown Error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    const result = {
      isSuccess: false,
      msg: errorMessage,
    };
    console.log(
      `Error inside clubServices.ts, inside getFavoriteClubs function. ${result.msg}`,
    );
    return result;
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
    const result = { isSuccess: false, msg: "No user is currently signed in." };
    console.log(result.msg);
    return result;
  }

  const dbRef = ref(db, `/favoriteClubs/${userId}/${club.id}`);

  try {
    // Fetch the club
    const snapshot = await get(dbRef);
    // Check if the club already exists
    if (snapshot.exists()) {
      const result = {
        isSuccess: false,
        msg: "Club already exists in favorites.",
      };
      console.log(result.msg);
      return result;
    }

    await set(dbRef, club);
    clearMatchesFromLocalStorage();
    return { isSuccess: true, msg: "Data written successfully" };
  } catch (error) {
    let errorMessage = "Unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    const result = {
      isSuccess: false,
      msg: errorMessage,
    };

    console.log(
      `Error inside clubServices.ts, inside addFavoriteClub function. ${result.msg}`,
    );
    return result;
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
    const result = { isSuccess: false, msg: "No user is currently signed in." };
    console.log(result.msg);
    return result;
  }

  const dbRef = ref(db, `/favoriteClubs/${userId}/${clubId}`);

  try {
    // Fetch the club
    const snapshot = await get(dbRef);
    // Check if the club exists
    if (!snapshot.exists()) {
      const result = {
        isSuccess: false,
        msg: "Club not found in favorites.",
      };
      console.log(result.msg);
      return result;
    }

    await remove(dbRef);
    clearMatchesFromLocalStorage();
    const result = {
      isSuccess: true,
      msg: "Club removed from favorites successfully",
    };
    console.log(result.msg);
    return result;
  } catch (error) {
    let errorMessage = "Unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    const result = {
      isSuccess: false,
      msg: errorMessage,
    };

    console.log(
      `Error inside clubServices.ts, inside removeFavoriteClub function. ${result.msg}`,
    );
    return result;
  }
}
