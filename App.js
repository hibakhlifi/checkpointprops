
// import logo from './logo.svg';
import "./App.css";
import Profile from "./Profile/Profile.js";
import Image from "./Image.png";


function App() {
  return (
    <div className="App">
      <Profile
        fullName="Hiba Khlifi"
        bio="Learn more and do more"
        profession="Web development"
      >
        <div>
          <img src={Image} alt="children props" width="200px" />
        </div>
      </Profile>

    </div>


  );
}

export default App;