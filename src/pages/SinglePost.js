import logo from "../assets/img/logo1.png";
import obito from "../assets/img/obito.jpg";
import OtherPostCard from "../components/OtherPostCard";

function SinglePost() {
  return (
    <div className="lg:pt-20 pt-40 container mx-auto lg:px-20 px-3">
      <div className="md:flex grid gap-x-3 my-5">
        <div className="content md:mx-0 mx-3" style={{ flex: 5 }}>
          <h2 className="lg:text-3xl md:text-2xl text-xl text-gray-700 font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            culpa voluptate dolor!
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
          <div className="img mt-3">
            <img src={obito} alt="obito" className="rounded" />
          </div>
          <div className="body my-5">
            <p className="text-lg text-gray-700 text-justify mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto doloremque ducimus dicta ullam voluptate vel obcaecati
              eligendi a quasi corporis quis, molestiae nemo facere magni earum
              nihil possimus fugiat atque?
            </p>
            <p className="text-lg text-gray-700 text-justify mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam placeat repellendus ullam error deserunt, ratione itaque
              dolorum perferendis asperiores cum quidem voluptatibus doloribus
              in vitae culpa repudiandae explicabo commodi modi aspernatur
              voluptatum possimus!
            </p>
            <p className="text-lg text-gray-700 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis minus, accusantium et, labore, excepturi tempora
              architecto quo ipsa quasi reprehenderit porro nihil cupiditate
              velit quae at!
            </p>
            <p className="text-lg text-gray-700 text-justify mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto doloremque ducimus dicta ullam voluptate vel obcaecati
              eligendi a quasi corporis quis, molestiae nemo facere magni earum
              nihil possimus fugiat atque?
            </p>
            <p className="text-lg text-gray-700 text-justify mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam placeat repellendus ullam error deserunt, ratione itaque
              dolorum perferendis asperiores cum quidem voluptatibus doloribus
              in vitae culpa repudiandae explicabo commodi modi aspernatur
              voluptatum possimus!
            </p>
            <p className="text-lg text-gray-700 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis minus, accusantium et, labore, excepturi tempora
              architecto quo ipsa quasi reprehenderit porro nihil cupiditate
              velit quae at!
            </p>
          </div>
        </div>
        <div className="px-5" style={{ flex: 2 }}>
          <h2 className="lg:text-xl text-sm uppercase mt-5 text-gray-700 font-semibold">
            other posts may you like
          </h2>
          <div className="posts my-5">
            <OtherPostCard />
            <OtherPostCard />
            <OtherPostCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
