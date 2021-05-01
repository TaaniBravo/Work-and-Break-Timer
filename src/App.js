import Timers from "./components/Timers";
import { Container } from "react-bootstrap";
import { CountsProvider } from "./hooks/useCounts";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <CountsProvider>
        <Container>
          <h1>Work Timer</h1>
          <Timers />
        </Container>
      </CountsProvider>
    </div>
  );
};

export default App;
