import React from 'react';
export default function ProfilePage() {
  return (
    <>
    <meta charSet="utf-8" />
    {/*  This file has been downloaded from bootdey.com @bootdey on twitter */}
    {/*  All snippets are MIT license http://bootdey.com/license */}
    <title>user profile bio graph and total sales - Bootdey.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="profile-nav col-md-3">
          <div className="panel">
            <div className="user-heading round">
              <a href = "/#">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt=""
                />
              </a>
              <h1>Camila Smith</h1>
              <p>deydey@theEmail.com</p>
            </div>
            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a href="/#">
                  {" "}
                  <i className="fa fa-user" /> Profile
                </a>
              </li>
              <li>
                <a href="/#">
                  {" "}
                  <i className="fa fa-calendar" /> Recent Activity{" "}
                  <span className="label label-warning pull-right r-activity">
                    9
                  </span>
                </a>
              </li>
              <li>
                <a href = "/#">
                  {" "}
                  <i className="fa fa-edit" /> Edit profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-info col-md-9">
          
          <div className="panel">
            <div className="bio-graph-heading">
             Hello.
            </div>
            <div className="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div className="row">
                <div className="bio-row">
                  <p>
                    <span>First Name </span>: Camila
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Last Name </span>: Smith
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Country </span>: Australia
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Birthday</span>: 13 July 1983
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Occupation </span>: UI Designer
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Email </span>: jsmith@flatlab.com
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Mobile </span>: (12) 03 4567890
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Phone </span>: 88 (02) 123456
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <div style={{ display: "inline", width: 100, height: 100 }}>
                        <canvas width={100} height="100px" />
                        <input
                          className="knob"
                          data-width={100}
                          data-height={100}
                          data-displayprevious="true"
                          data-thickness=".2"
                          defaultValue={35}
                          data-fgcolor="#e06b7d"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: 54,
                            height: 33,
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: 33,
                            marginLeft: "-77px",
                            border: 0,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: 20,
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(224, 107, 125)",
                            padding: 0,
                            WebkitAppearance: "none",
                            background: "none"
                          }}
                        />
                      </div>
                    </div>
                    <div className="bio-desk">
                      <h4 className="red">Employment History</h4>
                      <p>Company : Google</p>
                      <p>Designation : Junior Software Analyst</p>
                      <p>Start Date : July 2020</p>
                      <p>End Date : May 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <div style={{ display: "inline", width: 100, height: 100 }}>
                        <canvas width={100} height="100px" />
                        <input
                          className="knob"
                          data-width={100}
                          data-height={100}
                          data-displayprevious="true"
                          data-thickness=".2"
                          defaultValue={63}
                          data-fgcolor="#4CC5CD"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: 54,
                            height: 33,
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: 33,
                            marginLeft: "-77px",
                            border: 0,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: 20,
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(76, 197, 205)",
                            padding: 0,
                            WebkitAppearance: "none",
                            background: "none"
                          }}
                        />
                      </div>
                    </div>
                    <div className="bio-desk">
                      <h4 className="terques">Current Employment </h4>
                      <p>Company : Apple Inc.</p>
                      <p>Designation : Junior Software Developer</p>
                      <p>Start Date: July 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <div style={{ display: "inline", width: 100, height: 100 }}>
                        <canvas width={100} height="100px" />
                        <input
                          className="knob"
                          data-width={100}
                          data-height={100}
                          data-displayprevious="true"
                          data-thickness=".2"
                          defaultValue={75}
                          data-fgcolor="#96be4b"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: 54,
                            height: 33,
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: 33,
                            marginLeft: "-77px",
                            border: 0,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: 20,
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(150, 190, 75)",
                            padding: 0,
                            WebkitAppearance: "none",
                            background: "none"
                          }}
                        />
                      </div>
                    </div>
                    <div className="bio-desk">
                      <h4 className="green">Master's</h4>
                      <p>Institue : University of Computer Studies</p>
                      <p>Major : Data Science</p>
                      <p>Started : January 2022</p>
                      <p>Finished : January 2025</p>
                      <div style={{ width: 100, height: 100 }}>
                      <CircularProgressbar value={50} text={"50%"} 
                      styles={buildStyles({
                        textColor: '#854593',
                        pathColor: '#854593',
                      })} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <div style={{ display: "inline", width: 100, height: 100 }}>
                        <canvas width={100} height="100px" />
                        <input
                          className="knob"
                          data-width={100}
                          data-height={100}
                          data-displayprevious="true"
                          data-thickness=".2"
                          defaultValue={50}
                          data-fgcolor="#cba4db"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: 54,
                            height: 33,
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: 33,
                            marginLeft: "-77px",
                            border: 0,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: 20,
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(203, 164, 219)",
                            padding: 0,
                            WebkitAppearance: "none",
                            background: "none"
                          }}
                        />
                      </div>
                    </div>
                    <div className="bio-desk">
                      
                      <h4 className="purple">Undergraduate</h4>
                      <p> Institute : Habib University</p>
                      <p>Major : Computer Science</p>
                      <p>Minor: Mathematics</p>
                      <p>Started : August 2017</p>
                      <p>Deadline : June 2021</p>
                      <div style={{ width: 100, height: 100 }}>
                      <CircularProgressbar value={100} text={"100%"} 
                      styles={buildStyles({
                        textColor: '#854593',
                        pathColor: '#854593',
                      })}/>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html:
          "\nbody {\n    color: #797979;\n    background: #f1f2f7;\n  font-family: 'Open Sans', sans-serif;\n    padding: 0px !important;\n    margin: 0px !important;\n    font-size: 13px;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-font-smoothing: antialiased;\n}\n\n.profile-nav, .profile-info{\n    margin-top:30px;   \n}\n\n.profile-nav .user-heading {\n    background: #854593;\n    color: #fff;\n    border-radius: 4px 4px 0 0;\n    -webkit-border-radius: 4px 4px 0 0;\n    padding: 30px;\n    text-align: center;\n}\n\n.profile-nav .user-heading.round a  {\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border: 10px solid rgba(255,255,255,0.3);\n    display: inline-block;\n}\n\n.profile-nav .user-heading a img {\n    width: 112px;\n    height: 112px;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n}\n\n.profile-nav .user-heading h1 {\n    font-size: 22px;\n    font-weight: 300;\n    margin-bottom: 5px;\n}\n\n.profile-nav .user-heading p {\n    font-size: 12px;\n}\n\n.profile-nav ul {\n    margin-top: 1px;\n}\n\n.profile-nav ul > li {\n    border-bottom: 1px solid #ebeae6;\n    margin-top: 0;\n    line-height: 30px;\n}\n\n.profile-nav ul > li:last-child {\n    border-bottom: none;\n}\n\n.profile-nav ul > li > a {\n    border-radius: 0;\n    -webkit-border-radius: 0;\n    color: #89817f;\n    border-left: 5px solid #fff;\n}\n\n.profile-nav ul > li > a:hover, .profile-nav ul > li > a:focus, .profile-nav ul li.active  a {\n    background: #f8f7f5 !important;\n    border-left: 5px solid #854593;\n    color: #89817f !important;\n}\n\n.profile-nav ul > li:last-child > a:last-child {\n    border-radius: 0 0 4px 4px;\n    -webkit-border-radius: 0 0 4px 4px;\n}\n\n.profile-nav ul > li > a > i{\n    font-size: 16px;\n    padding-right: 10px;\n    color: #bcb3aa;\n}\n\n.r-activity {\n    margin: 6px 0 0;\n    font-size: 12px;\n}\n\n\n.p-text-area, .p-text-area:focus {\n    border: none;\n    font-weight: 300;\n    box-shadow: none;\n    color: #c3c3c3;\n    font-size: 16px;\n}\n\n.profile-info .panel-footer {\n    background-color:#f8f7f5 ;\n    border-top: 1px solid #e7ebee;\n}\n\n.profile-info .panel-footer ul li a {\n    color: #7a7a7a;\n}\n\n.bio-graph-heading {\n    background: #854593;\n    color: #fff;\n    text-align: center;\n    font-style: italic;\n    padding: 40px 110px;\n    border-radius: 4px 4px 0 0;\n    -webkit-border-radius: 4px 4px 0 0;\n    font-size: 16px;\n    font-weight: 300;\n}\n\n.bio-graph-info {\n    color: #89817e;\n}\n\n.bio-graph-info h1 {\n    font-size: 22px;\n    font-weight: 300;\n    margin: 0 0 20px;\n}\n\n.bio-row {\n    width: 50%;\n    float: left;\n    margin-bottom: 10px;\n    padding:0 15px;\n}\n\n.bio-row p span {\n    width: 100px;\n    display: inline-block;\n}\n\n.bio-chart, .bio-desk {\n    float: left;\n}\n\n.bio-chart {\n    width: 40%;\n}\n\n.bio-desk {\n    width: 60%;\n}\n\n.bio-desk h4 {\n    font-size: 15px;\n    font-weight:400;\n}\n\n.bio-desk h4.terques {\n    color: #4CC5CD;\n}\n\n.bio-desk h4.red {\n    color: #e26b7f;\n}\n\n.bio-desk h4.green {\n    color: #97be4b;\n}\n\n.bio-desk h4.purple {\n    color: #caa3da;\n}\n\n.file-pos {\n    margin: 6px 0 10px 0;\n}\n\n.profile-activity h5 {\n    font-weight: 300;\n    margin-top: 0;\n    color: #c3c3c3;\n}\n\n.summary-head {\n    background: #ee7272;\n    color: #fff;\n    text-align: center;\n    border-bottom: 1px solid #ee7272;\n}\n\n.summary-head h4 {\n    font-weight: 300;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n}\n\n.summary-head p {\n    color: rgba(255,255,255,0.6);\n}\n\nul.summary-list {\n    display: inline-block;\n    padding-left:0 ;\n    width: 100%;\n    margin-bottom: 0;\n}\n\nul.summary-list > li {\n    display: inline-block;\n    width: 19.5%;\n    text-align: center;\n}\n\nul.summary-list > li > a > i {\n    display:block;\n    font-size: 18px;\n    padding-bottom: 5px;\n}\n\nul.summary-list > li > a {\n    padding: 10px 0;\n    display: inline-block;\n    color: #818181;\n}\n\nul.summary-list > li  {\n    border-right: 1px solid #eaeaea;\n}\n\nul.summary-list > li:last-child  {\n    border-right: none;\n}\n\n.activity {\n    width: 100%;\n    float: left;\n    margin-bottom: 10px;\n}\n\n.activity.alt {\n    width: 100%;\n    float: right;\n    margin-bottom: 10px;\n}\n\n.activity span {\n    float: left;\n}\n\n.activity.alt span {\n    float: right;\n}\n.activity span, .activity.alt span {\n    width: 45px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    background: #eee;\n    text-align: center;\n    color: #fff;\n    font-size: 16px;\n}\n\n.activity.terques span {\n    background: #8dd7d6;\n}\n\n.activity.terques h4 {\n    color: #8dd7d6;\n}\n.activity.purple span {\n    background: #b984dc;\n}\n\n.activity.purple h4 {\n    color: #b984dc;\n}\n.activity.blue span {\n    background: #90b4e6;\n}\n\n.activity.blue h4 {\n    color: #90b4e6;\n}\n.activity.green span {\n    background: #aec785;\n}\n\n.activity.green h4 {\n    color: #aec785;\n}\n\n.activity h4 {\n    margin-top:0 ;\n    font-size: 16px;\n}\n\n.activity p {\n    margin-bottom: 0;\n    font-size: 13px;\n}\n\n.activity .activity-desk i, .activity.alt .activity-desk i {\n    float: left;\n    font-size: 18px;\n    margin-right: 10px;\n    color: #bebebe;\n}\n\n.activity .activity-desk {\n    margin-left: 70px;\n    position: relative;\n}\n\n.activity.alt .activity-desk {\n    margin-right: 70px;\n    position: relative;\n}\n\n.activity.alt .activity-desk .panel {\n    float: right;\n    position: relative;\n}\n\n.activity-desk .panel {\n    background: #F4F4F4 ;\n    display: inline-block;\n}\n\n\n.activity .activity-desk .arrow {\n    border-right: 8px solid #F4F4F4 !important;\n}\n.activity .activity-desk .arrow {\n    border-bottom: 8px solid transparent;\n    border-top: 8px solid transparent;\n    display: block;\n    height: 0;\n    left: -7px;\n    position: absolute;\n    top: 13px;\n    width: 0;\n}\n\n.activity-desk .arrow-alt {\n    border-left: 8px solid #F4F4F4 !important;\n}\n\n.activity-desk .arrow-alt {\n    border-bottom: 8px solid transparent;\n    border-top: 8px solid transparent;\n    display: block;\n    height: 0;\n    right: -7px;\n    position: absolute;\n    top: 13px;\n    width: 0;\n}\n\n.activity-desk .album {\n    display: inline-block;\n    margin-top: 10px;\n}\n\n.activity-desk .album a{\n    margin-right: 10px;\n}\n\n.activity-desk .album a:last-child{\n    margin-right: 0px;\n}\n"
      }}
    />
  </>
  );
}