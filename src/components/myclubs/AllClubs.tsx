import { Club } from "../../types/customTypes";
import useClubs from "../../hooks/useClubs";
import { motion } from "framer-motion";
import { sortBy } from "lodash";

export default function AllClubs() {
  const { allClubs, allClubsLoading, allClubsError, addFavoriteClub } =
    useClubs();

  const allClubsSorted = sortBy(allClubs?.data, ["name"]);

  const handleClubClick = (club: Club) => {
    addFavoriteClub(club);
  };

  return (
    <section className="mt-20">
      <h3 className="text-2xl font-bold md:text-3xl">All Clubs:</h3>

      {allClubsLoading && <div>Loading...</div>}

      {allClubsError && <div>an Error occurred ..</div>}

      <div className="mt-5 grid grid-cols-2 gap-y-10 p-4 sm:grid-cols-3 md:mt-10 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
        {allClubsSorted.map((club: Club) => (
          <motion.div
            key={club.id}
            className="flex cursor-pointer flex-col items-center justify-center gap-y-2 hover:bg-red-400 hover:bg-opacity-20"
            onClick={() => handleClubClick(club)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={club.logo}
              alt={club.name}
              className="h-14 w-14 md:h-20 md:w-20 xl:h-24 xl:w-24"
            />
            <span className="text-md text-center">{club.name}</span>
            <div className="flex gap-x-2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
