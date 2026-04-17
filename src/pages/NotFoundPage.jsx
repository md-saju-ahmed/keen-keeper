// NotFound.js
import { Link } from "react-router";
import { BsHouseDoor } from "react-icons/bs";

const NotFoundPage = () => {
  return (
    <div className="text-center space-y-4 py-20 px-4 md:px-5">
      <h1 className="text-[#244D3F] text-5xl md:text-6xl font-extrabold">
        404
      </h1>
      <p className="text-xl font-bold">Page Not Found</p>
      <p className="text-base max-w-md mx-auto text-base-content/70">
        Looks like this friendship link is broken. The page you're looking
        for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
        <Link
          to="/"
          className="btn bg-[#244D3F] text-white hover:bg-[#1b3a30] mt-2"
        >
          <BsHouseDoor /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;