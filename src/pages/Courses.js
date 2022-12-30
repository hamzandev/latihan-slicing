import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className="container px-10 mx-auto lg:py-28 py-36">
      <h3 className="mt-5 mb-10 text-2xl text-center text-slate-600 font-bold">
        Daftar Kursus Online
      </h3>
      <div className="grid lg:grid-cols-3 gap-5">
        <CourseCard
          title="Javascript ES6"
          durasi="12"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cupiditate officiis officia ipsum sed consectetur et error, itaque illum, voluptates recusandae magni, ipsam iure enim ad sapiente debitis veritatis!"
        />
        <CourseCard
          title="TailwindCSS v.3"
          durasi="4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cupiditate officiis officia ipsum sed consectetur et error, itaque illum, voluptates recusandae magni, ipsam iure enim ad sapiente debitis veritatis!"
        />
        <CourseCard
          title="Laravel 9"
          durasi="7"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cupiditate officiis officia ipsum sed consectetur et error, itaque illum, voluptates recusandae magni, ipsam iure enim ad sapiente debitis veritatis!"
        />
        <CourseCard
          title="Membuat REST API dengan Express + Nodejs"
          durasi="3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cupiditate officiis officia ipsum sed consectetur et error, itaque illum, voluptates recusandae magni, ipsam iure enim ad sapiente debitis veritatis!"
        />
      </div>
    </div>
  );
}

export default Courses;
