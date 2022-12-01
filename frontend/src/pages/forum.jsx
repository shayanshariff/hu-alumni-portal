import Post from "../components/post";
import "../assets/css/main.css";

export default function Forum() {
  return (
    <div
      className="col w-full h-screen"
      style={{ background: "rgb(92, 37, 104)" }}
    >
      <h1 className="text-center text-2xl py-4 text-white">
        Welcome to the HU Forum
      </h1>
      <div className="flex space-x-2 space-between">
        <div className="flex flex-col space-between space-y-4">
            <div className="bg-white rounded p-2 mx-2">
                <h1>Your Groups</h1>
                <p className="text-sm mt-3">HU Alumini Forum</p>
                <p className="text-sm mt-1">Batch of 20220</p>
            </div>
        </div>
        <div className="flex space-between flex-col space-y-4 w-1/2 m-auto">
          <div className="flex space-between space-x-2">
            <textarea
              className="w-full p-2 rounded resize-none"
              type="text"
              rows={4}
              placeholder="Write a new post ..."
            />
            <div className="block">
              <button className="p-2 bg-blue-500 rounded text-white bottom-0">
                Post
              </button>
            </div>
          </div>
          <Post user="Jane Doe" text="Lorem ipsum si amot di lamor" />
          <Post user="Jane Doe" text="Lorem ipsum si amot di lamor" />
          <Post user="Jane Doe" text="Lorem ipsum si amot di lamor" />
        </div>
        <div className="bg-white rounded p-2 mx-2">
            <h1 className="text-center">Friends</h1>
        </div>
      </div>
    </div>
  );
}
