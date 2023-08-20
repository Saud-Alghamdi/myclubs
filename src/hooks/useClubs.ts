import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllClubs } from "../api/getAllClubs";
import {
  getFavoriteClubs,
  addFavoriteClub,
  removeFavoriteClub,
} from "../services/clubServices";
import { useAuth } from "./useAuth";
import { Club, ClubsQueryType } from "../types/customTypes";
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

  // When allClubsData or favoriteClubsData changes, update allClubs state, to prevent a club from existing in both states
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
  const mutationAddFavorite = useMutation(
    (club: Club) => addFavoriteClub(userId, club),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["favoriteClubs"]);
      },
    },
  );

  // Remove favorite club
  const mutationRemoveFavorite = useMutation(
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
    addFavoriteClub: mutationAddFavorite.mutate,
    removeFavoriteClub: mutationRemoveFavorite.mutate,
  };
}
