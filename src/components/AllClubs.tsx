import { useEffect, useState } from 'react';
import { getAllClubs } from '../services/getAllClubsApi';

export default function AllClubs() {
  const [clubsData, setClubsData] = useState([]);

  useEffect(() => {
    getAllClubs().then((data) => {
      const allClubs = Object.values(data).flat();
      setClubsData(allClubs);
    });
  }, []);

  return (
    <div id="content-wrapper" className="m-5">
      <h3 className="text-2xl font-bold">All Clubs:</h3>
      <div className="grid grid-cols-3 gap-4 p-4">
        {clubsData.map((club, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <img src={club.logo} alt={club.clubName} className="h-14 w-14" />
            <span className="text-md text-center">{club.clubName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}