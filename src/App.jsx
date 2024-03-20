import './App.css'
import Lottery from './Lottery.jsx';
import { sum } from './helper.js';

function App() {

  let winCondition = (ticket) => { //we have passed a function as props
    return ticket[0] === 0; //if we want to change the winning condition, then we have to change the required condition in this line 
  };

  return (
    <>
      <Lottery n = {3} winCondition = {winCondition}/>
      
    </>
  );
}

export default App;
