import "./App.css";
import MyLineChart from "./components/MyLineChart.js/MyLineChart";
import SpecialChart from "./components/SpecialChart/SpecialChart";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });

  return (
    <div className="App">
      <animated.h3 style={props}>React Rechart Sample</animated.h3>
      <MyLineChart></MyLineChart>
      <animated.h3 style={props}>Data processing with Axios</animated.h3>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
