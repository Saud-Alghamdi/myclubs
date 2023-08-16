import { Club } from "../types/customTypes";
import useClubs from "../hooks/useClubs";

export default function FavoriteClubs() {
  const { favoriteClubs, favoriteClubsLoading, favoriteClubsError } =
    useClubs();

  const clubsData = favoriteClubs?.data || [];

  return (
    <div id="content-wrapper" className="m-5">
      <h3 className="text-2xl font-bold">Your Favorite Clubs:</h3>

      {favoriteClubsLoading && <div>Loading...</div>}

      {favoriteClubsError && <div>{favoriteClubsError.message}</div>}

      {!favoriteClubsLoading && clubsData.length === 0 && (
        <span>No Favorite Clubs selected</span>
      )}

      {!favoriteClubsLoading && clubsData.length > 0 && (
        <div className="grid grid-cols-3 gap-4 p-4">
          {clubsData.map((club: Club) => (
            <div
              key={club.id}
              className="flex flex-col items-center justify-center"
            >
              <img src={club.logo} alt={club.name} className="h-14 w-14" />
              <span className="text-md text-center">{club.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
