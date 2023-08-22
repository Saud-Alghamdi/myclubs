import { FavoriteClubMatch } from "../types/customTypes";

export const removeDuplicateMatches = (
  matches: FavoriteClubMatch[],
): FavoriteClubMatch[] => {
  const uniqueMatches = Array.from(
    new Set(matches.map((match) => match.matchId)),
  )
    .map((id) => matches.find((match) => match.matchId === id))
    // Filter out potential undefined results
    .filter((match): match is FavoriteClubMatch => match !== undefined);

  return uniqueMatches;
};

export const clearMatchesFromLocalStorage = (): void => {
  localStorage.removeItem("matches");
};

export const convertTimestampToDateAndTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // multiply by 1000 if the timestamp is in seconds

  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString(undefined, optionsDate);

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  let formattedTime = date.toLocaleTimeString(undefined, optionsTime);

  // Remove leading zero if any
  if (formattedTime.startsWith("0")) {
    formattedTime = formattedTime.slice(1);
  }

  return { date: formattedDate, time: formattedTime };
};
