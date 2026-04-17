import { Link } from "react-router";

const statusStyles = {
  overdue: "bg-[#EF4444] text-base-100",
  "almost due": "bg-[#EFAD44] text-base-100",
  "on-track": "bg-[#244D3F] text-base-100",
};

const FriendCard = ({ friend }) => {
  return (
    <Link
      to={`/friends/${friend.id}`}
      className="card bg-base-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center"
    >
      {/* Image */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
      />

      {/* Name */}
      <h3 className="mt-3 font-semibold text-base sm:text-lg truncate w-full">
        {friend.name}
      </h3>

      {/* Days */}
      <p className="text-sm text-gray-500 mt-1">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {Array.isArray(friend.tags) &&
          friend.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#CBFADB] text-[#244D3F] text-xs px-2 py-1 rounded-full font-medium capitalize"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Status */}
      <span
        className={`mt-4 text-xs px-3 py-1 rounded-full font-medium capitalize ${statusStyles[friend.status] || "bg-gray-100 text-gray-500"
          }`}
      >
        {friend.status}
      </span>
    </Link>
  );
};

export default FriendCard;