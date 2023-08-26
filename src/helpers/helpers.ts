import { FavoriteClubMatch } from "../types/customTypes";

/////----- Remove Duplicated Matches ------/////
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

/////----- Clear Matches from local storage ------/////
export const clearMatchesFromLocalStorage = (): void => {
  localStorage.removeItem("matches");
};

/////----- Convert Time stamp to date and time ------/////
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

/////----- Regex for getting the text inside the parentheses ------/////
export const getTextFromParentheses = (wholeText: string): string => {
  const match = wholeText.match(/\(([^)]+)\)/);
  const text = match ? match[1] : "";
  return text;
};
