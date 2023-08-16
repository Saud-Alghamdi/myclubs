import { Club } from "../types/customTypes";

export const clubAlreadyExistsInFavorites = (newClub: Club, clubs: Club[]): boolean => {
  return clubs.some((club) => club.id === newClub.id);
};
