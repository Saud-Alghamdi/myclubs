import AllClubs from "../components/AllClubs";
import FavoriteClubs from "../components/FavoriteClubs";

export default function MyClubs() {
  return (
    <div className="myclubs-page">
      <FavoriteClubs />
      <AllClubs />
    </div>
  );
}
