import { useContext } from "react";
import { useParams } from "react-router";
import useFriends from "../hooks/useFriends";
import { HashLoader } from "react-spinners";
import { History } from "../context/History";
import { toast } from "react-toastify";
import {
  BsCameraVideo,
  BsTelephone,
  BsChatLeftDots,
  BsTrash,
  BsArchive,
  BsAlarm,
  BsClockHistory
} from "react-icons/bs";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const expectedFriend = friends.find((friend) => String(friend.id) === id);
  const { interactions, setInteractions } = useContext(History);

  if (loading || !expectedFriend) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#244D3F" />
      </div>
    );
  }

  const handleInteraction = (type) => {
    const newInteraction = {
      friendId: expectedFriend.id,
      name: expectedFriend.name,
      type,
      time: new Date().toISOString(),
    };

    setInteractions([...interactions, newInteraction]);
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} with ${expectedFriend.name}`);
  };

  const friendHistory = interactions
    .filter((item) => String(item.friendId) === String(expectedFriend.id))
    .sort((a, b) => new Date(b.time) - new Date(a.time));

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

  const statusStyles = {
    overdue: "bg-[#EF4444] text-base-100",
    "almost due": "bg-[#EFAD44] text-base-100",
    "on-track": "bg-[#244D3F] text-base-100",
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16 md:py-20 px-4 md:px-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Left */}
        <div className="space-y-4">

          {/* Profile Card */}
          <div className="bg-base-100 p-6 space-y-3 rounded-lg shadow-sm border border-base-200 text-center">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="h-16 w-16 md:h-20 md:w-20 mx-auto rounded-full object-cover"
            />

            <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
              {expectedFriend.name}
            </h2>

            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${statusStyles[expectedFriend.status] ||
                  "bg-gray-100 text-gray-500"
                  }`}
              >
                {expectedFriend.status}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {Array.isArray(expectedFriend.tags) &&
                expectedFriend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#CBFADB] text-[#244D3F] text-xs px-2 py-1 rounded-full font-medium capitalize"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <p className="text-sm leading-relaxed text-base-content/70">
              {expectedFriend.bio}
            </p>

            <p className="text-sm text-base-content/60">
              Email: {expectedFriend.email}
            </p>
          </div>

          {/* Actions */}
          <div className="bg-base-100 p-4 rounded-sm shadow-sm border border-base-200 font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-base-200 transition-all">
            <BsAlarm />
            <span>Snooze 2 weeks</span>
          </div>

          <div className="bg-base-100 p-4 rounded-sm shadow-sm border border-base-200 font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-base-200 transition-all">
            <BsArchive />
            <span>Archive</span>
          </div>

          <div className="bg-base-100 p-4 rounded-sm shadow-sm border border-base-200 font-medium flex items-center justify-center gap-2 cursor-pointer text-[#ef4444] hover:bg-red-50 transition-all">
            <BsTrash />
            <span>Delete</span>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-3 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            <div className="bg-base-100 flex flex-col justify-center items-center gap-2 p-6 rounded-lg shadow-sm border border-base-200">
              <div className="text-2xl font-semibold">
                {expectedFriend.days_since_contact}
              </div>
              <div className="text-sm text-base-content/60 text-center">
                Days Since Contact
              </div>
            </div>

            <div className="bg-base-100 flex flex-col justify-center items-center gap-2 p-6 rounded-lg shadow-sm border border-base-200">
              <div className="text-2xl font-semibold">
                {expectedFriend.goal}
              </div>
              <div className="text-sm text-base-content/60 text-center">
                Goal (Days)
              </div>
            </div>

            <div className="bg-base-100 flex flex-col justify-center items-center gap-2 p-6 rounded-lg shadow-sm border border-base-200">
              <div className="text-lg font-semibold text-center">
                {new Date(expectedFriend.next_due_date).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </div>
              <div className="text-sm text-base-content/60 text-center">
                Next Due
              </div>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-base-100 p-6 rounded-lg shadow-sm border border-base-200 space-y-4">
            <div className="flex justify-between gap-6">
              <h2 className="text-lg font-medium">Relationship Goal</h2>
              <button className="btn btn-sm">Edit</button>
            </div>
            <p className="">Connect every <strong>{expectedFriend.goal} days</strong></p>
          </div>

          {/* Quick Check-in*/}
          <div className="bg-base-100 p-6 rounded-lg shadow-sm border border-base-200 space-y-4">
            <h2 className="text-lg font-medium">Quick Check-In</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button
                onClick={() => handleInteraction("call")}
                className="bg-[#f8fafc] border border-[#E9E9E9] rounded-lg p-6 flex flex-col items-center gap-3 hover:bg-base-200"
              >
                <BsTelephone className="text-2xl font-medium" />
                <span>Call</span>
              </button>

              <button
                onClick={() => handleInteraction("text")}
                className="bg-[#f8fafc] border border-[#E9E9E9] rounded-lg p-6 flex flex-col items-center gap-3 hover:bg-base-200"
              >
                <BsChatLeftDots className="text-2xl font-medium" />
                <span>Text</span>
              </button>

              <button
                onClick={() => handleInteraction("video")}
                className="bg-[#f8fafc] border border-[#E9E9E9] rounded-lg p-6 flex flex-col items-center gap-3 hover:bg-base-200"
              >
                <BsCameraVideo className="text-2xl font-medium" />
                <span>Video</span>
              </button>

            </div>
          </div>

          {/* Recent Interactions */}
          <div className="bg-base-100 p-6 rounded-lg shadow-sm border border-base-200 space-y-4">

            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Recent Interactions</h2>
              <button className="btn btn-sm flex items-center gap-2">
                <BsClockHistory />
                Full History
              </button>
            </div>

            {friendHistory.length === 0 ? (
              <p className="text-sm text-base-content/60">
                No interactions yet with {expectedFriend.name}
              </p>
            ) : (
              <div className="space-y-4">
                {friendHistory.slice(0, 5).map((item) => {
                  const config = interactionConfig[item.type];
                  const Icon = config.icon;

                  return (
                    <div key={item.time} className="flex items-center gap-4 p-3 border border-[#E9E9E9] rounded-lg">
                      <Icon className="text-2xl font-medium" />

                      <div className="space-y-1">
                        <p className="font-medium">
                          {config.label} with {item.name}
                        </p>

                        <p className="text-xs text-base-content/60">
                          {new Date(item.time).toLocaleString("en-US", {
                            month: "short",
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

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;