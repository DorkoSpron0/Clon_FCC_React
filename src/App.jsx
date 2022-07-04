import './App.css';
import Testimonio from './Components/Testimonio.jsx';
import Logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="Logo FreeCodeCamp" className='Logo' />

      <div className="testimonios">
        <Testimonio
          image="1"
          nombre="Shawn Wang"
          country="Singapore"
          cargo="Software Engineer"
          empresa="Amazon"
          test="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />

        <Testimonio
          image="2"
          nombre="Sarah Chima"
          country="Nigeria"
          cargo="Software Engineer"
          empresa="ChatDesk"
          test="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
      </div>

    </div>
  );
}

export default App;
