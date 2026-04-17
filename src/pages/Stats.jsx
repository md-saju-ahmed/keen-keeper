import {
  Legend,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useContext } from "react";
import { History } from "../context/History";
import { HashLoader } from "react-spinners";
import useFriends from "../hooks/useFriends";

const Stats = () => {
  const { loading } = useFriends();
  const { interactions = [] } = useContext(History) || {};

  const callCount = interactions.filter((i) => i.type === "call").length;
  const textCount = interactions.filter((i) => i.type === "text").length;
  const videoCount = interactions.filter((i) => i.type === "video").length;

  const totalInteractions = callCount + textCount + videoCount;

  const data = [
    {
      name: "Call",
      value: callCount,
      fill: "#244D3F"
    },
    {
      name: "Text",
      value: textCount,
      fill: "#7E35E1"
    },
    {
      name: "Video",
      value: videoCount,
      fill: "#37A163"
    },
  ];

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#244D3F" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-16 md:py-20 px-4 md:px-6">
      <h2 className="font-bold text-3xl md:text-4xl mb-8">
        Friendship Analytics
      </h2>

      <div className="bg-base-100 rounded-xl shadow-sm p-6 md:p-10">
        <p className="text-lg md:text-xl font-medium mb-6">
          Interaction Breakdown
        </p>

        {totalInteractions === 0 ? (
          <div className="h-60 flex flex-col items-center justify-center text-center text-base-content/60">
            <p className="text-lg font-medium">
              No interactions yet
            </p>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md h-80 md:h-100">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="65%"
                    outerRadius="80%"
                    paddingAngle={5}
                    cornerRadius={5}
                  />
                  <Tooltip />
                  <Legend iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;