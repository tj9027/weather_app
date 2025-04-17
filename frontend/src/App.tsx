import { Navbar } from "./component/Navigation";
import { Dashboard } from "./page/Dashboard";
import { WeatherProvider } from "./store/weatherStore";

function App() {
  return (
    <WeatherProvider>
      <div className="flex flex-col h-screen bg-gray-100">
        <Navbar />
        <Dashboard />
      </div>
    </WeatherProvider>
  );
}

export default App;
