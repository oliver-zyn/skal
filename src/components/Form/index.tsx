import "./style.css";

export function Form() {
  return (
    <div className="form-connect">
      <div>
        <h2>Sign in now</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
      </div>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <div>
          <span className="line"></span>
          <span>or</span>
          <span className="line"></span>
        </div>
        <button>Connect Wallet</button>
      </form>
    </div>
  );
}
