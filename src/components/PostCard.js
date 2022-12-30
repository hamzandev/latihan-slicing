import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png";

function PostCard() {
  return (
    <Link to={"posts/12312"}>
      <div className="card px-10 py-8 cursor-pointer hover:shadow-lg shadow rounded-lg bg-gradient-to-tr from-blue-100 to-pink-100">
        <h2 className="title lg:text-3xl md:text-2xl text-xl lg:w-[80%] text-gray-700 font-semibold">
          Title of Posts Lorem ipsum dolor sit amet consectetur. Lorem ipsum
          dolor sit.
        </h2>
        <div className="user my-2 items-center flex gap-2">
          <div className="img w-[40px]">
            <img src={logo} alt="test" className="w-[100%] object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-blue-500">
              Hamzan Wahyudi
            </span>
            <small className="text-gray-600">Frontend Developer</small>
          </div>
        </div>
        <p className="text-gray-600 w-[80%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quo
          voluptatem, dolorum illo, odit illum ad in nobis natus, repellendus
          asperiores! Dicta, sint saepe.
        </p>
      </div>
    </Link>
  );
}

export default PostCard;
