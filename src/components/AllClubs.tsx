import { useClubs } from "../services/useClubs";
import { Club } from "../types/customTypes";

export default function AllClubs() {
  const { data: clubs, isLoading, error } = useClubs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div id="content-wrapper" className="m-5">
      <h3 className="text-2xl font-bold">All Clubs:</h3>
      <div className="grid grid-cols-3 gap-4 p-4">
        {clubs?.map((club: Club) => (
          <div
            key={club.id}
            className="flex flex-col items-center justify-center"
          >
            <img src={club.logo} alt={club.name} className="h-14 w-14" />
            <span className="text-md text-center">{club.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
