import { useState } from "react";
import { Club } from "../../types/customTypes";
import useClubs from "../../hooks/useClubs";
import { sortBy } from "lodash";
import { motion } from "framer-motion";

export default function FavoriteClubs() {
  const {
    favoriteClubs,
    favoriteClubsLoading,
    favoriteClubsError,
    removeFavoriteClub,
    removeFavoriteClubLoading,
    removeFavoriteClubSuccess,
    removeFavoriteClubError,
  } = useClubs();

  // Sort clubs alphabetically before mapping them
  const favoriteClubsSorted = sortBy(favoriteClubs, ["name"]);

  // Track which club has been clicked, to add opacity to it
  const [removingClubId, setRemovingClubId] = useState<null | number>(null);

  const handleRemoveClick = (clubId: number) => {
    setRemovingClubId(clubId);
    removeFavoriteClub(clubId);

    // Remove favorite club feedback
    if (!removeFavoriteClubLoading) {
      if (removeFavoriteClubSuccess) {
        // Modal = Success
      } else if (removeFavoriteClubError) {
        // Modal = Error
      }
    }
  };

  return (
    <section>
      <h3 className="text-center text-2xl font-bold md:text-3xl xl:text-4xl">
        Your Favorite Clubs:
      </h3>

      {favoriteClubsLoading && <div>Loading...</div>}

      {favoriteClubsError && <div>{favoriteClubsError.message}</div>}

      {!favoriteClubsLoading && favoriteClubsSorted.length === 0 && (
        <span>No Favorite Clubs selected</span>
      )}

      {!favoriteClubsLoading && favoriteClubsSorted.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-y-10 p-4 sm:grid-cols-3 md:mt-10 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {favoriteClubsSorted.map((club: Club) => (
            <motion.div
              key={club.id}
              className={`flex  flex-col items-center justify-center gap-y-2  ${
                removingClubId === club.id && removeFavoriteClubLoading
                  ? "opacity-50"
                  : "opacity-100"
              }`}
              transition={{ duration: 0.1 }}
            >
              <img
                src={club.logo}
                alt={club.name}
                className="h-14 w-14 md:h-20 md:w-20 xl:h-24 xl:w-24"
              />
              <span className="text-md text-center">{club.name}</span>
              <div className="flex gap-x-2">
                <button
                  onClick={() => handleRemoveClick(club.id)}
                  className="mt-3 block w-fit rounded-lg bg-red-700 px-3 py-2 text-center text-xs text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  - Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
