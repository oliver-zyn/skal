import './style.css'

export function Home() {
  return (
    <section className='home'>
      <div>
        <div className="title">
          <span>Frase extra aqui</span>
          <h1>We travel in the past to bring you the present</h1>
          <p>Go to the next level with tokenized tickets! Enjoy your events like a real <span className='text-effect'>viking.</span></p>
        </div>
        <div className='form-connect'>
          <div>
            <h2>Sign in now</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          </div>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <div>
              <span className='line'></span>
              <span>or</span>
              <span className='line'></span>
            </div>
            <button>Connect Wallet</button>
          </form>
        </div>
      </div>
    </section>
  )
}