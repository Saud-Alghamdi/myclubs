import { MatchCardProps } from "../../types/customTypes";

export default function MatchCard({ match }: MatchCardProps) {
  return (
    // Match Card - Flex Container
    <div
      key={match.matchId}
      className="flex flex-wrap items-center justify-center gap-y-10 rounded-3xl bg-black bg-opacity-40 py-7"
    >
      {/* Col 1 - Time &  Date */}
      <div className="col flex w-full items-center pl-10">
        <span className="md:text-md text-sm">{match.date}</span>
        &nbsp;&nbsp; - &nbsp;&nbsp;
        <span className="md:text-md text-sm">{match.time}</span>
      </div>
      {/* Col 2 - First Club */}
      <div className="col flex w-[45%] flex-col items-center justify-center  gap-y-3">
        <img
          className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28  "
          src={match.club1Logo}
          alt={match.club1Name}
        />
        <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
          {match.club1Name}
        </span>
      </div>
      {/* Col 3 - "VS" */}
      <div className="col flex w-[10%] items-center  justify-center">
        <span className="text-xl font-bold md:text-3xl">VS</span>
      </div>
      {/* Col 4 - Second Club */}
      <div className="col flex  w-[45%] flex-col items-center justify-center  gap-y-3">
        <img
          className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 "
          src={match.club2Logo}
          alt={match.club2Name}
        />
        <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
          {match.club2Name}
        </span>
      </div>
    </div>
  );
}
