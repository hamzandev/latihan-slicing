import logo from "../assets/img/logo1.png";

function CourseCard(props) {
  return (
    <div className="hover:shadow-xl transition-all duration-150 bg-gradient-to-tr from-sky-100 to-pink-100 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-2">
        <img src={logo} alt="Logo" width={50} height={50} />
        <div className="flex flex-col">
          <h3 className="text-2xl text-slate-600 font-bold">{props.title}</h3>
          <small className="text-slate-500">Durasi : {props.durasi}jam</small>
        </div>
      </div>
      <p className="text-slate-500 font-normal">{props.desc}</p>
      <button className="bg-gradient-to-br from-sky-500 to-indigo-500 px-8 text-sm py-2 rounded-lg mt-3 text-white/80">
        View
      </button>
    </div>
  );
}

export default CourseCard;
