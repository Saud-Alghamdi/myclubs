import { Club } from "../../types/customTypes";
import useClubs from "../../hooks/useClubs";

export default function AllClubs() {
  const { allClubs, allClubsLoading, allClubsError, addFavoriteClub } =
    useClubs();

  const handleClubClick = (club: Club) => {
    addFavoriteClub(club);
  };

  return (
    <div id="content-wrapper" className="m-5">
      <h3 className="text-2xl font-bold">All Clubs:</h3>

      {allClubsLoading && <div>Loading...</div>}

      {allClubsError && <div>an Error occurred ..</div>}

      <div className="grid grid-cols-3 gap-4 p-4">
        {allClubs?.data?.map((club: Club) => (
          <div
            key={club.id}
            className="flex flex-col items-center justify-center"
            onClick={() => handleClubClick(club)}
          >
            <img src={club.logo} alt={club.name} className="h-14 w-14" />
            <span className="text-md text-center">{club.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
