import Banner from "../templates/Banner";
import Courses from "./Courses";
function Home() {
  return (
    <div>
      <Banner />
      <div id="courses">
        <Courses />
      </div>
    </div>
  );
}

export default Home;
