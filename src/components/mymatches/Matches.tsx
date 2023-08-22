import useClubs from "../../hooks/useClubs";

export default function Matches() {
  const { favoriteClubsMatches } = useClubs();

  return (
    <section>
      <header>
        <h3 className="text-2xl font-bold md:text-3xl">
          Your Upcoming Matches:
        </h3>
      </header>

      <div id="matches-wrapper" className="mx-auto mt-10 max-w-7xl space-y-10">
        {favoriteClubsMatches?.data?.map((match) => (
          <div
            key={match.matchId}
            className="flex flex-wrap items-center gap-y-10 rounded-3xl bg-black bg-opacity-40 px-2 py-7"
          >
            <div className=" col flex w-full items-center justify-center gap-x-10 md:gap-x-20">
              <span className="text-md md:text-xl xl:text-2xl">
                {match.date}
              </span>
            </div>
            <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
              <img
                className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40 "
                src={match.club1Logo}
                alt={match.club1Name}
              />
              <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
                {match.club1Name}
              </span>
            </div>
            <div className="col flex flex-grow items-center justify-center">
              <span className="text-xl font-bold md:text-3xl">VS</span>
            </div>
            <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
              <img
                className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40"
                src={match.club2Logo}
                alt={match.club2Name}
              />
              <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
                {match.club2Name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
