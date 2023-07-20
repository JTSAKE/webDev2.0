import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';

function App() {
  return(
    <div>
      {/* <Greeter person='Bill' from='Zev'/>
      <Greeter  />
      <Greeter person='Linda' from='Daniel'/>
      <Die numSides={20}/>
      <Die />
      <Die numSides={10}/> */}
      <ListPicker values={[1,2,3,6,7,8]}/>
      <ListPicker values={['Apple', 'Orange', 'Potatoes']}/>
    </div>
  );
}

export default App
