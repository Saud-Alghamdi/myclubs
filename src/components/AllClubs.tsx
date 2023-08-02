import { useEffect, useState } from "react";
import { getAllClubs, ClubInfo } from "../services/getAllClubsApi";

export default function AllClubs() {
  const [clubsData, setClubsData] = useState<ClubInfo[]>([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const clubsData = await getAllClubs();
        const allClubs = Object.values(clubsData).flat() as ClubInfo[];
        setClubsData(allClubs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClubs();
  }, []);

  return (
    <div id="content-wrapper" className="m-5">
      <h3 className="text-2xl font-bold">All Clubs:</h3>
      <div className="grid grid-cols-3 gap-4 p-4">
        {clubsData.map((club) => (
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
