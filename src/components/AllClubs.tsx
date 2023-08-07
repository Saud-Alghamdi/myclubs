import { useAllClubs } from "../services/getAllClubsApi";
import { Club } from "../types/customTypes";

export default function AllClubs() {
  const { data: leaguesData, isError, isLoading } = useAllClubs();

  if (isLoading || !leaguesData) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching clubs.</div>;
  }

  return (
    <div id="content-wrapper" className="m-5">
      <h3 className="text-2xl font-bold">All Clubs:</h3>
      <div className="grid grid-cols-3 gap-4 p-4">
        {(Object.values(leaguesData) as Club[][]).flat().map((club: Club) => (
          <div
            key={club.team.id}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={club.team.logo}
              alt={club.team.name}
              className="h-14 w-14"
            />
            <span className="text-md text-center">{club.team.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
