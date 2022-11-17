import "./style.css";

function App() {
  return (
    <>
    
    <header>
  <h1>HU Alumni Portal</h1>
  <img src={require('./habib.png')} alt="HU Alumni Portal" />
</header>
    <div className="container" id="container">
  <div className="form-container sign-up-container">
    <form action="#">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </form>
  </div>
  <div className="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="/#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className="ghost" id="signIn">
          Sign In
        </button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello!</h1>
        <p>Please login to access the Alumni Portal.</p>
        <button className="ghost" id="signIn">
          Back
        </button>
      </div>
    </div>
  </div>
</div>

    </>

  );
}

export default App;
