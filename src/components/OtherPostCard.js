import obito from "../assets/img/obito.jpg";
import { Link } from "react-router-dom";

function OtherPostCard() {
  return (
    <div className="shadow mb-10 bg-gradient-to-tr from-pink-100 to-blue-100">
      <img src={obito} alt="img" className="rounded-t-md" />
      <div className="flex flex-col p-5">
        <h3 className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h3>
        <Link
          to={"/blog/posts/128737"}
          className="text-gray-50 text-sm mt-3 rounded bg-gradient-to-tr from-blue-500 to-indigo-500 w-max px-3 py-1"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default OtherPostCard;
