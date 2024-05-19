import "./App.scss";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { BigDay } from "./Components/BigDay/BigDay";
import { Rsvp } from "./Components/Rsvp/Rsvp";

function App() {
  return (
    <>
      <Header />
      <Home />
      <BigDay />
      <Rsvp />
    </>
  );
}

export default App;
