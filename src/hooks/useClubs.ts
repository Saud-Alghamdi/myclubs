import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllClubs } from "../api/getAllClubs";
import { getFavoriteClubs, addFavoriteClub } from "../services/clubServices";
import { useAuth } from "./useAuth";
import { Club, ClubsQuery } from "../types/customTypes";

export default function useClubs() {
  const queryClient = useQueryClient();
  const { currentUser } = useAuth();
  const userId = currentUser!.uid;

  // Fetch all clubs
  const {
    data: allClubs,
    isLoading: allClubsLoading,
    isSuccess: allClubsSuccess,
    error: allClubsError,
  } = useQuery<ClubsQuery, Error>(["allClubs"], getAllClubs);

  // Fetch favorite clubs
  const {
    data: favoriteClubs,
    isLoading: favoriteClubsLoading,
    isSuccess: favoriteClubsSuccess,
    error: favoriteClubsError,
  } = useQuery<ClubsQuery, Error>(["favoriteClubs", userId], () =>
    getFavoriteClubs(userId),
  );

  // Add favorite club
  const mutationAddFavorite = useMutation(
    (club: Club) => addFavoriteClub(userId, club),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["favoriteClubs"]);
      },
    },
  );

  return {
    allClubs,
    allClubsLoading,
    allClubsSuccess,
    allClubsError,
    favoriteClubs,
    favoriteClubsLoading,
    favoriteClubsSuccess,
    favoriteClubsError,
    addFavoriteClub: mutationAddFavorite.mutate,
  };
}
