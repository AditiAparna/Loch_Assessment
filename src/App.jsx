import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import LandingScreen from "./screens/LandingScreen";

function App() {
  return (
    <div className="flex flex-col md:flex-row-reverse h-screen justify-end md:justify-start">
      <LoginScreen />
      <LandingScreen />
    </div>
  );
}

export default App;
