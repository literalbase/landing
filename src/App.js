import "./App.css";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage";
import Textline from "./Components/Textlign/Textline";
import Video from "./Components/Video/Video";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Video />
      <Textline />
      <Footer />
    </div>
  );
}

export default App;
