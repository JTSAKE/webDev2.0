import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDie from './DoubleDie';
import ColorList from './ColorList';
import SlotMachine from './SlotMachine';

function App() {
  return(
    <div>
      {/* <Greeter person='Bill' from='Zev'/>
      <Greeter  />
      <Greeter person='Linda' from='Daniel'/>
      <Die numSides={20}/>
      <Die />
      <Die numSides={10}/>
      <ListPicker values={[1,2,3,6,7,8]}/>
      <ListPicker values={['Apple', 'Orange', 'Potatoes']}/>
      <DoubleDie/> */}
      {/* <ColorList colors={['Red', 'Pink', 'Purple','Yellow']}/>
      <ColorList colors={['Blue', 'teal', 'White','Black']}/> */}
      <SlotMachine v1='1' v2='1' v3='1'/>
    </div>
  );
}

export default App
