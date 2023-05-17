import Navbar from "../NavBar/Navbar";
function Hero() {
  return (
    <div className="Hero">
      <header className="App-header">
        <Navbar />
      </header>
      <div  className="hero-left">
        <h2>THE BEST <br />DELICIOUS <br /><span>FOOD.</span></h2>
      </div>
      
    </div>
  );
}

export default Hero;
