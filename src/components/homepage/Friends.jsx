import FriendCard from "../ui/FriendCard";
import useFriends from "../../hooks/useFriends";
import { HashLoader } from "react-spinners";

const Friends = () => {
  const { friends, loading } = useFriends();

  return (
    <section className="w-full max-w-7xl mx-auto pb-16 md:pb-20 px-4 md:px-5">
      <div className="mb-6">
        <h2 className="font-semibold text-xl sm:text-2xl">
          Your Friends
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-50">
          <HashLoader color="#244D3F" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.slice(0, 12).map((friend) => (
            <FriendCard friend={friend} key={friend.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Friends;