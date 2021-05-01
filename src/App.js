import Timers from "./components/Timers";
import { Container } from "react-bootstrap";
import { CountsProvider } from "./hooks/useCounts";
import "./App.css";
import Session from "./components/Session";

const App = () => {
  return (
    <div className="app">
      <CountsProvider>
        <Container>
          <h1>Work Timer</h1>
          <Timers />
          <Session />
        </Container>
      </CountsProvider>
      <footer>Created by Taani Maama</footer>
    </div>
  );
};

export default App;
