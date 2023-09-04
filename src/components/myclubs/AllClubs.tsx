import { Club } from "../../types/customTypes";
import useClubs from "../../hooks/useClubs";
import { motion } from "framer-motion";
import { sortBy } from "lodash";
import { useState } from "react";

export default function AllClubs() {
  const {
    allClubs,
    allClubsLoading,
    allClubsError,
    addFavoriteClub,
    addFavoriteClubLoading,
    addFavoriteClubSuccess,
    addFavoriteClubError,
  } = useClubs();

  // Track which club has been clicked, to add opacity to it
  const [addingClubId, setAddingClubId] = useState<null | number>(null);

  // Sort clubs alphabetically before mapping them
  const allClubsSorted = sortBy(allClubs, ["name"]);

  const handleClubClick = (club: Club) => {
    setAddingClubId(club.id);
    addFavoriteClub(club);

    // Add favorite club feedback
    if (!addFavoriteClubLoading) {
      if (addFavoriteClubSuccess) {
        // Modal = Success
      } else if (addFavoriteClubError) {
        // Modal = Error
      }
    }
  };

  return (
    <section className="mt-20">
      <h3 className="text-center text-2xl font-bold md:text-3xl xl:text-4xl">
        All Clubs:
      </h3>

      {allClubsLoading && <div>Loading...</div>}

      {allClubsError && <div>an Error occurred ..</div>}

      <div className="mt-5 grid grid-cols-2 gap-y-10 p-4 sm:grid-cols-3 md:mt-10 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
        {allClubsSorted.map((club: Club) => (
          <motion.div
            key={club.id}
            className={`flex cursor-pointer flex-col items-center justify-center gap-y-2 hover:bg-red-400 hover:bg-opacity-20 ${
              addingClubId === club.id && addFavoriteClubLoading
                ? "opacity-50"
                : "opacity-100"
            }`}
            onClick={() => handleClubClick(club)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={club.logo}
              alt={club.name}
              className={"h-14 w-14 md:h-20 md:w-20 xl:h-24 xl:w-24"}
            />
            <span className="text-md text-center">{club.name}</span>
            <div className="flex gap-x-2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
