import AllClubs from "../components/myclubs/AllClubs";
import FavoriteClubs from "../components/myclubs/FavoriteClubs";

export default function MyClubs() {
  return (
    <div className="myclubs-page">
      <FavoriteClubs />
      <AllClubs />
    </div>
  );
}
