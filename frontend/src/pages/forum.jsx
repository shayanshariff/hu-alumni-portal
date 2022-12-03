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
      <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                    <div class="card rounded">
                                    <div class="card-body">
                                        <p class="card-title font-weight-bold justify-content-between mb-2 pb-2 ">My Groups</p>
                                        <div class="d-flex justify-content-between mb-2 pb-2 ">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <div class="ml-2">
                                                <p>Batch of 2022 </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 ">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <div class="ml-2">
                                                <p>Alumni Forum </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 ">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <div class="ml-2">
                                                <p>Computer Science </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </div>
            
                        
                    </div>
        <div className="flex space-between flex-col space-y-4 w-1/2 m-auto">
          <div className="flex space-between space-x-2">
            <textarea
              className="w-full p-2 rounded-xl resize-none"
              type="text"
              rows={4}
              placeholder="Write a new post ..."
            />
            <div className="block">
              <button className="p-2 bg-blue-500 rounded-xl text-white bottom-0">
                Post
              </button>
            </div>
          </div>
          <Post user="Jane Doe" text="Lorem ipsum si amot di lamor" />
          <Post user="Jane Doe" text="Lorem ipsum si amot di lamor" />
          <Post user="Jane Doe" text="Lorem ipsum si amot di lamor" />
        </div>
        <div className="bg-white rounded-xl p-2 mx-2">
            <h1 className="text-center">Friends</h1>
        </div>
      </div>
    </div>
  );
}
