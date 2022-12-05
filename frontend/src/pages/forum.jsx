import Post from "../components/post";
import "../assets/css/main.css";



export default function Forum() {
  return (
    
    <div
      className="col w-full h-screen font-sans"
      style={{ background: "#e5e7eb" }}
    >
      <h1 className="font-bold text-center text-2xl py-4 text-purple">
        Welcome to the HU Alumni Forum
      </h1>
      <div class="row profile-body">
                   
                    <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper pl-6">
                    <div class="card rounded-xl">
                                    <div class="card-body">
                                        <h6 class="card-title">Messages</h6>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="" />
                                                <div class="ml-2">
                                                <p>John Doe </p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png" alt="" />
                                                <div class="ml-2">
                                                    <p>Jassa</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar4.png" alt="" />
                                                <div class="ml-2">
                                                    <p>Alex</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar5.png" alt="" />
                                                <div class="ml-2">
                                                    <p>Jassa</p>

                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                <div class="ml-2">
                                                    <p>Ali</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar7.png" alt="" />
                                                <div class="ml-2">
                                                    <p>Richard</p>
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
              placeholder="Write a new post..."
            />
            <div className="block">
              <button className="pl-6 pr-6 pt-12 pb-12 bg-btn  rounded-xl text-white bottom-4">
                Post
              </button>
            </div>
          </div>
          <Post user="Jane Doe" text="Lorem ipsum si amot di lamor" />
          <Post user="Jane Doe" text="Lorem ipsum si amot di lamor" />
        </div>
        <div class="d-none d-xl-block col-xl-3 right-wrapper pr-6">
                        <div class="row">
                           
                            <div class="col-md-12 grid-margin">
                                <div class="card rounded-xl">
                                    <div class="card-body">
                                        <h6 class="card-title">Suggestions for you</h6>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="" />
                                                <div class="ml-2">
                                                    <p>jassa</p>
                                                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png" alt="" />
                                                <div class="ml-2">
                                                    <p>jassa</p>
                                                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar4.png" alt="" />
                                                <div class="ml-2">
                                                    <p>jassa</p>
                                                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar5.png" alt="" />
                                                <div class="ml-2">
                                                    <p>jassa</p>
                                                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                <div class="ml-2">
                                                    <p>jassa</p>
                                                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar7.png" alt="" />
                                                <div class="ml-2">
                                                    <p>jassa</p>
                                                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
      </div>
    </div>
    
  );
}
