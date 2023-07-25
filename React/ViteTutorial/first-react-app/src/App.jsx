import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDie from './DoubleDie';
import ColorList from './ColorList';
import SlotMachine from './SlotMachine';
import ShoppingList from './ShoppingList';
import Clicker from './Clicker';
import Form from './Form';

const data = [
  {id:1, item: 'eggs', quantity: 12, completed: false},
  {id:2, item: 'milk', quantity: 1, completed: true},
  {id:3, item: 'chicken breasts', quantity: 4, completed: false},
  {id:4, item: 'carrots', quantity: 6, completed: true},
];



function App() {
  return(
    <div>
      <Clicker message='What did you say!' btnText='Say this!'/>
      <Clicker message='No body messages up the emporers groove!' btnText='No Touchy!'/>
    </div>
  );
}

export default App
