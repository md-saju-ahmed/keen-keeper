import { BsPlusLg } from "react-icons/bs";

const stats = [
  { value: 12, label: "Total Friends" },
  { value: 3, label: "On Track" },
  { value: 6, label: "Need Attention" },
  { value: 15, label: "Interactions This Month" },
];

const Banner = () => {
  return (
    <section className="hero py-16 md:py-20 pb-10">
      <div className="hero-content flex-col gap-10 text-center w-full max-w-7xl mx-auto px-4 md:px-5">
        <div className="max-w-2xl md:max-w-3xl space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Friends to keep close in your life
          </h1>
          <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white hover:bg-[#1b3a30]">
            <BsPlusLg />
            Add a Friend
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-base-100 flex flex-col justify-center items-center gap-2 p-6 md:p-8 rounded-lg shadow-xs hover:shadow-md hover:-translate-y-1 transition duration-200"
            >
              <div className="text-4xl font-semibold text-neutral">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-base-content/60 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;