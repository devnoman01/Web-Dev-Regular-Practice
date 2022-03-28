import "./App.css";
import { useState } from "react";

function App() {
  let charge = 1;

  const battery = document.getElementById("battery");
  function updateCharge() {
    if (charge < 10) {
      const div = document.createElement("div");
      div.classList.add("bar");
      battery.appendChild(div);
      charge++;
    }
  }
  function removeCharge() {
    if (charge > 0) {
      battery.removeChild(battery.lastChild);
      charge--;
    }
  }

  // const [charge, setCharge] = useState([]);

  return (
    <div className="App">
      <div id="projectbox">
        <div className="battery" id="battery">
          <div className="bar"></div>
        </div>

        <div>
          <button onClick={updateCharge}>Increase</button>
          <button onClick={removeCharge}>Decrease</button>
        </div>
      </div>
      {/* <Charging></Charging> */}
    </div>
  );
}
export default App;

// const Charging = () => {
//   const updateCharge = () => {
//     const battery = document.getElementById('battery');
//     const div = document.createElement('div');
//     div.classList.add('bar');
//     for(let i=0;i<=charge;i++){
//       battery.appendChild(div);
//     }
//   }
//   const chargeUp = () =>{
//     if(charge<10){
//       const newCharge = charge + 1;
//       updateCharge(newCharge);
//     }
//   }
//   const chargeDown = () =>{
//     if(charge>0){
//       const newCharge = charge - 1;
//       updateCharge(newCharge);
//     }
//   }
//   return (
//   );
// }
