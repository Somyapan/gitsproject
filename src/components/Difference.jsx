import Counter from "./Counter";

const Difference = () => {
  return (
    <div className="bg-[#262626] min-h-screen flex flex-col justify-center items-center w-full  gap-4 pt-1 lg:pt-2">
      <div className="w-full px-4 sm:px-8">
        <h1 className="text-white text-center font-bold sm:text-4xl text-3xl mb-2 mt-4 lg:mb-4">
          WHAT DIFFERENTIATES US?
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 lg:mb-10"></div>
        <div className="flex flex-wrap justify-center gap-8 pt-24 lg:gap-x-36 text-white font-bold text-center w-full mx-auto">
          <CounterItem
            icon="fa-solid fa-people-group"
            message="Alumni"
            count={10212}
          />
          <CounterItem
            icon="fa-solid fa-chalkboard-user"
            message="ACADEMICIANS"
            count={317}
          />
          <CounterItem
            icon="fa-solid fa-chart-line"
            message="PLACEMENTS"
            count={9218}
          />
          <CounterItem
            icon="fa-solid fa-handshake"
            message="ACCREDITED PARTNERS"
            count={38}
          />
        </div>
      </div>
    </div>
  );
};

export default Difference;

const CounterItem = ({ icon, count, message }) => {
  return (
    <div className="w-full sm:w-48 mb-6 sm:mb-0 flex flex-col items-center">
      <span className={`sm:text-[5rem] text-[3rem] mb-6 ${icon}`}></span>
      <Counter value={count} />
      <p>{message}</p>
    </div>
  );
};
