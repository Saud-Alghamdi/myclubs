import useClubs from "../../hooks/useClubs";
import MatchCard from "./MatchCard";

export default function Matches() {
  const { favoriteClubsMatches } = useClubs();

  return (
    <section>
      <header>
        <h1 className="text-center text-2xl font-bold md:text-3xl xl:text-4xl">
          Your Upcoming Matches:
        </h1>
      </header>

      <div id="matches-wrapper" className="mx-auto mt-14 max-w-5xl space-y-10">
        {favoriteClubsMatches?.data?.map((match) => (
          <MatchCard match={match}/>
        ))}
      </div>
    </section>
  );
}
