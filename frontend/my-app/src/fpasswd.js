// import "./fpasswd.js";

function Fpasswd() {
  return (
    <>    
   <section className="vh-100" style={{ backgroundColor: "#854593"}}>
  <div className="container p-0 h-100" >
    <div className="row-xl d-flex justify-content-center align-items-center h-100" >
        <div className="card  align-items-center" style={{ borderRadius: "1rem"}}>
            <div className="col-md-8 col-lg-7 d-flex align-items-center p-3"  >
                <form>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">Forgot Password</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Enter your email and enter the code you recieve
                  </h5>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example17"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      Email address
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button"
                    >
                      Confirm
                    </button>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example17"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      Code
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>

            </div>
        </div>
    </div>
  </div>
</section>

    </>

  );
}
export default Fpasswd;
