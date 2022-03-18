import logo from './logo.svg';
import './App.css';

const signers = [
  {name:"Tahsan Khan", song: "Alo Alo"},
  {name:"Minar Rahman", song: "Jhoom"},
  {name:"John Kabir", song: "Ami Akash Pathabo"}
]; 

function Person(props){
  console.log(props);
  return (
    <div className="person">
      <h3>{props.name}</h3>
      <p>{props.profession}</p>
    </div>
  )
}
function Singer(props){
  return (
    <div className="singer">
      <h3>{props.name}</h3>
      <p>{props.song}</p>
    </div>
  )
}

function App() {
  const players = ["Mashrafi Bin Mortuza", "Sakib Al Hasan", "Mushfiqur Rahim"];
  

  return (
    <div className="App">
      {
        players.map(player => <Person name={player} profession="Cricketer"></Person>)
      }
      {
        signers.map(singer => <Singer name={singer.name} song={singer.song}></Singer>)
      }

    </div>
  );
}

export default App;
