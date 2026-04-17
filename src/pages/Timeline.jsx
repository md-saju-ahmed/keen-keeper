import { useContext, useState, useEffect } from "react";
import { History } from "../context/History";
import { HashLoader } from "react-spinners";
import { BsCameraVideo, BsTelephone, BsChatLeftDots } from "react-icons/bs";

const Timeline = () => {
  const { interactions } = useContext(History);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const interactionConfig = {
    call: {
      icon: BsTelephone,
      label: "Call",
    },
    text: {
      icon: BsChatLeftDots,
      label: "Text",
    },
    video: {
      icon: BsCameraVideo,
      label: "Video",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter
  const filteredInteractions = interactions.filter((item) => {
    const matchesType = filterType === "all" || item.type === filterType;
    const configLabel = interactionConfig[item.type]?.label || "";
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      configLabel.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesSearch;
  });

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#244D3F" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-16 md:py-20 px-4 md:px-5">
      <div className="mb-6 space-y-6">
        <h2 className="font-bold text-4xl">Timeline</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
          <select
            className="select w-full sm:w-40"
            value={filterType}
            onChange={(event) => setFilterType(event.target.value)}
          >
            <option value="all">All</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
          <label className="input w-full sm:w-auto">
            <input
              type="search"
              placeholder="Start typing to filter"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
        </div>
      </div>

      {filteredInteractions.length === 0 ? (
        <div className="bg-base-100 py-40 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-center">
            No Interactions Found!
          </h2>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredInteractions.map((item) => {
            const config = interactionConfig[item.type];
            const Icon = config.icon;

            return (
              <div key={item.id} className="bg-base-100 p-4 border border-[#E9E9E9] shadow-xs rounded-lg flex items-center gap-4">
                <div className="text-[#244D3F] text-4xl">
                  <Icon />
                </div>
                <div>
                  <p className="text-lg">
                    <span className="text-xl font-medium">{config.label}</span> with {item.name}
                  </p>
                  <p className="text-[#64748B] font-medium">
                    {new Date(item.time).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Timeline;