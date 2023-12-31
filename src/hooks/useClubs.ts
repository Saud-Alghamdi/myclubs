import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllClubs } from "../api/getAllClubs";
import { getFavoriteClubsMatches } from "../api/getFavoriteClubsMatches";
import {
  getFavoriteClubs,
  addFavoriteClub,
  removeFavoriteClub,
} from "../services/clubServices";
import { useAuth } from "./useAuth";
import { Club, ClubsQueryType, MatchesQueryType } from "../types/customTypes";
import { useState, useEffect } from "react";

export default function useClubs() {
  const [favoriteClubs, setFavoriteClubs] = useState<Club[]>([]);
  const [allClubs, setAllClubs] = useState<Club[]>([]);

  const queryClient = useQueryClient();
  const { currentUser } = useAuth();
  const userId = currentUser!.uid;

  // Fetch all clubs
  const {
    data: allClubsData,
    isLoading: allClubsLoading,
    isSuccess: allClubsSuccess,
    error: allClubsError,
  } = useQuery<ClubsQueryType, Error>(["allClubs"], getAllClubs);

  // Fetch favorite clubs
  const {
    data: favoriteClubsData,
    isLoading: favoriteClubsLoading,
    isSuccess: favoriteClubsSuccess,
    error: favoriteClubsError,
  } = useQuery<ClubsQueryType, Error>(["favoriteClubs", userId], () =>
    getFavoriteClubs(userId),
  );

  // Fetch favorite clubs matches
  const {
    data: favoriteClubsMatchesData,
    isLoading: favoriteClubsMatchesLoading,
    isSuccess: favoriteClubsMatchesSuccess,
    error: favoriteClubsMatchesError,
  } = useQuery<MatchesQueryType, Error>(["favoriteClubsMatches", userId], () =>
    getFavoriteClubsMatches(userId),
  );

  // Prevent club from existing in both favoriteClubs and allClubs states by updating allClubs state When allClubsData or favoriteClubsData changes.
  useEffect(() => {
    if (allClubsData && favoriteClubsData) {
      const favoriteClubIds = new Set(
        favoriteClubsData.data?.map((club) => club.id),
      );
      const uniqueAllClubs = allClubsData.data?.filter(
        (club) => !favoriteClubIds.has(club.id),
      );
      setAllClubs(uniqueAllClubs ?? []);
      setFavoriteClubs(favoriteClubsData.data ?? []);
    }
  }, [allClubsData, favoriteClubsData]);

  // Add favorite club
  const mutationAddFavoriteClub = useMutation(
    (club: Club) => addFavoriteClub(userId, club),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["favoriteClubs"]);
      },
    },
  );

  // Remove favorite club
  const mutationRemoveFavoriteClub = useMutation(
    (clubId: number) => removeFavoriteClub(userId, clubId),
    {
      onSuccess: () => {
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
    favoriteClubsMatches: favoriteClubsMatchesData,
    favoriteClubsMatchesLoading,
    favoriteClubsMatchesSuccess,
    favoriteClubsMatchesError,
    // Mutations
    addFavoriteClub: mutationAddFavoriteClub.mutate,
    addFavoriteClubLoading: mutationAddFavoriteClub.isLoading,
    addFavoriteClubError: mutationAddFavoriteClub.error,
    addFavoriteClubSuccess: mutationAddFavoriteClub.isSuccess,
    removeFavoriteClub: mutationRemoveFavoriteClub.mutate,
    removeFavoriteClubLoading: mutationRemoveFavoriteClub.isLoading,
    removeFavoriteClubError: mutationRemoveFavoriteClub.error,
    removeFavoriteClubSuccess: mutationRemoveFavoriteClub.isSuccess,
  };
}
