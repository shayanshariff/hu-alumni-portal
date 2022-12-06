import { useState } from "react";
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export default function Post(props) {

    const [postComments, setPostComments] = useState([])
    const [commentsBox, setCommentsBox] = useState("")
    const [showed, setShowed] = useState(false);

  return (

                                <div style={showed ? { display: "none" } : { display: "block" }} className="col-md-12">
                                <div className="card rounded-xl">
                                    <div className="card-header ">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                <div className="ml-2">
                                                    <p>{props.user}</p>
                                                    <p className="tx-11 text-muted">5 min ago</p>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn p-0" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={(e) => setShowed(true)}>
                                                    <img img src="https://cdn-icons-png.flaticon.com/512/57/57165.png" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal icon-lg pb-3px" />
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="mb-3 tx-14">{props.text}</p>
                                        
                                       
                                    </div>
                                    <div className="card-footer">
                                    {props.comments?.map((comment) => { 
                                            return(
                                            <div className="row pb-2 pt-2 bg-light border-bottom border-top">
                                                <p className="text-muted col ">{comment.user}:</p>
                                                <p className=" col-10  ">{comment.content}</p>
                                            </div>

                                            )
                                        })}
                                    <textarea
                                            value={commentsBox}
                                            onChange={(e) => setCommentsBox(e.target.value)}
                                        className="w-full p-2 resize-none"
                                        type="text"
                                        rows={2}
                                        placeholder="Write a comment..."
                                        />
                                   
                                   
   
                                    </div>
                                  
                                
                                </div>
                            </div>
                       
                                                     
  );
}
