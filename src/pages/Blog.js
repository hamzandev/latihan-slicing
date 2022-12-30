import PostCard from "../components/PostCard";

function Blog() {
  return (
    <div className="container md:px-40 mx-auto lg:pt-20 pt-40">
      <h1 className="text-xl font-bold md:text-start text-center text-slate-700 my-5 uppercase">
        Posts
      </h1>
      <div className="posts flex flex-wrap md:gap-y-10 gap-y-5 md:px-0 px-5 gap-x-5 pb-20">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default Blog;
