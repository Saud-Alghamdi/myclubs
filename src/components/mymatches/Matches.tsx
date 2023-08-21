import useClubs from "../../hooks/useClubs";

export default function Matches() {
  const { allClubs } = useClubs();

  // Find the club with ID 33
  const club33 = allClubs.find((club) => club.id === 33);

  return (
    <section>
      <header>
        <h3 className="text-2xl font-bold md:text-3xl">
          Your Upcoming Matches:
        </h3>
      </header>

      <div id="matches-wrapper" className="mx-auto mt-10 max-w-7xl space-y-10">
        {/* Match div */}
        <div className="flex flex-wrap items-center gap-y-10 rounded-3xl bg-black bg-opacity-40 px-2 py-7">
          {/* Col 1 */}
          <div className=" col flex w-full items-center justify-center gap-x-10 md:gap-x-20">
            <span className="text-md md:text-xl xl:text-2xl">2023/08/31</span>
            <span className="text-md md:text-xl xl:text-2xl">7:00 PM</span>
          </div>
          {/* Col 2 */}
          <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40 "
              src={club33?.logo}
              alt=""
            />
            <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
              {club33?.name}
            </span>
          </div>
          {/* Col 3 */}
          <div className="col flex flex-grow items-center justify-center">
            <span className="text-xl md:text-3xl font-bold">VS</span>
          </div>
          {/* Col 4 */}
          <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40"
              src={club33?.logo}
              alt=""
            />
            <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
              {club33?.name}
            </span>
          </div>
        </div>
        {/* Match div */}
        <div className="flex flex-wrap items-center gap-y-10 rounded-3xl bg-black bg-opacity-40 px-2 py-7">
          {/* Col 1 */}
          <div className=" col flex w-full items-center justify-center gap-x-10 md:gap-x-20">
            <span className="text-md md:text-xl xl:text-2xl">2023/08/31</span>
            <span className="text-md md:text-xl xl:text-2xl">7:00 PM</span>
          </div>
          {/* Col 2 */}
          <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40 "
              src={club33?.logo}
              alt=""
            />
            <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
              {club33?.name}
            </span>
          </div>
          {/* Col 3 */}
          <div className="col flex flex-grow items-center justify-center">
            <span className="text-xl md:text-3xl font-bold">VS</span>
          </div>
          {/* Col 4 */}
          <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40"
              src={club33?.logo}
              alt=""
            />
            <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
              {club33?.name}
            </span>
          </div>
        </div>
        {/* Match div */}
        <div className="flex flex-wrap items-center gap-y-10 rounded-3xl bg-black bg-opacity-40 px-2 py-7">
          {/* Col 1 */}
          <div className=" col flex w-full items-center justify-center gap-x-10 md:gap-x-20">
            <span className="text-md md:text-xl xl:text-2xl">2023/08/31</span>
            <span className="text-md md:text-xl xl:text-2xl">7:00 PM</span>
          </div>
          {/* Col 2 */}
          <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40 "
              src={club33?.logo}
              alt=""
            />
            <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
              {club33?.name}
            </span>
          </div>
          {/* Col 3 */}
          <div className="col flex flex-grow items-center justify-center">
            <span className="text-xl md:text-3xl font-bold">VS</span>
          </div>
          {/* Col 4 */}
          <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40"
              src={club33?.logo}
              alt=""
            />
            <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
              {club33?.name}
            </span>
          </div>
        </div>
        {/* Match div */}
        <div className="flex flex-wrap items-center gap-y-10 rounded-3xl bg-black bg-opacity-40 px-2 py-7">
          {/* Col 1 */}
          <div className=" col flex w-full items-center justify-center gap-x-10 md:gap-x-20">
            <span className="text-md md:text-xl xl:text-2xl">2023/08/31</span>
            <span className="text-md md:text-xl xl:text-2xl">7:00 PM</span>
          </div>
          {/* Col 2 */}
          <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40 "
              src={club33?.logo}
              alt=""
            />
            <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
              {club33?.name}
            </span>
          </div>
          {/* Col 3 */}
          <div className="col flex flex-grow items-center justify-center">
            <span className="text-xl md:text-3xl font-bold">VS</span>
          </div>
          {/* Col 4 */}
          <div className="col flex flex-grow flex-col items-center justify-center gap-y-3 ">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 xl:h-40 xl:w-40"
              src={club33?.logo}
              alt=""
            />
            <span className="md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
              {club33?.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
