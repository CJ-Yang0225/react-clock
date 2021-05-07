import { useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "./Clock";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <App.Container>
      <Clock time={time} />
    </App.Container>
  );
}

App.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #091921;
`;

export default App;
