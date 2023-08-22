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
