import logo from './logo.svg';
import './App.css';

const players = ["Tamim Iqbal", "Soummo Sarkar", "Mashrafi Bin Mortuza", "Sakib Al Hasan", "Mushfiqur Rahim"];

const signers = [
  {name:"Tahsan Khan", song: "Alo Alo"},
  {name:"Minar Rahman", song: "Jhoom"},
  {name:"John Kabir", song: "Ami Akash Pathabo"},
  {name:"Balam", song: "Lukochuri"},
  {name:"Momtaz", song: "Bookta Fiatta Jay"}
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

  return (
    <div className="App">
      <div className="container players-cards">
        {
          players.map(player => <Person name={player} profession="Cricketer"></Person>)
        }
      </div>

      <div className="container singer-cards">
        {
          signers.map(singer => <Singer name={singer.name} song={singer.song}></Singer>)
        }
      </div>
    </div>
  );
}

export default App;
