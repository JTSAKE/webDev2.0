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
import Counter from './Counter';
import Toggler from './Toggler';
import Colorbox from './ColorBox';
import ColorBoxes from './ColorBoxes';

const data = [
  {id:1, item: 'eggs', quantity: 12, completed: false},
  {id:2, item: 'milk', quantity: 1, completed: true},
  {id:3, item: 'chicken breasts', quantity: 4, completed: false},
  {id:4, item: 'carrots', quantity: 6, completed: true},
];

const colors = [
  "#FFD1DC", "#AEC6CF", "#B0E57C", "#FFF380", "#B19CD9",
  "#FFB347", "#AFEEEE", "#E6E6FA", "#FFDAB9", "#98FB98",
  "#F5C8E2", "#D0F0C0", "#F0E68C", "#D8BFD8", "#FFA07A",
  "#87CEFA", "#E0FFFF", "#DDA0DD", "#FFC0CB", "#7FFFD4",
  "#F0F8FF", "#E6E6FA", "#FFFACD", "#87CEEB", "#FFB6C1",
  "#98FB98", "#FFDEAD", "#00CED1", "#FFE4E1", "#00FA9A",
  "#F5F5F5", "#FFA07A", "#B0E0E6", "#FFFAF0", "#FF69B4",
  "#F0FFF0", "#FFA500", "#00BFFF", "#FFD700", "#AFEEEE",
  "#F0E68C", "#F5DEB3", "#00FFFF", "#E0FFFF", "#D3D3D3",
  "#8A2BE2", "#00FF00", "#FFF0F5", "#FF8C00", "#87CEFA",
  "#00FF7F", "#FFF5EE", "#FF4500", "#B0C4DE", "#7FFF00",
  "#F5FFFA", "#FF6347", "#87CEEB", "#66CDAA", "#FFDAB9",
  "#00FFFF", "#FFE4B5", "#4682B4", "#ADFF2F", "#E6E6FA",
  "#48D1CC", "#FFFAFA", "#F08080", "#ADD8E6", "#7B68EE",
  "#20B2AA", "#FAFAD2", "#CD5C5C", "#B0C4DE", "#5F9EA0",
  "#7CFC00", "#FFFFE0", "#CD853F", "#C0C0C0", "#9ACD32",
  "#E0FFFF", "#FFF8DC", "#8B4513", "#4169E1", "#BDB76B",
  "#98FB98", "#F0FFF0", "#D2B48C", "#1E90FF", "#FFF0F5",
  "#FDF5E6", "#FF0000", "#AFEEEE", "#ADFF2F", "#FFE4E1",
  "#F5DEB3", "#FAEBD7", "#FF4500", "#6495ED", "#F5F5DC",
  "#800000", "#B0E0E6", "#556B2F", "#00BFFF", "#FF69B4",
  "#FFFAF0", "#BDB76B", "#1E90FF", "#FFFAFA", "#808000",
  "#87CEFA", "#F0F8FF", "#DAA520", "#20B2AA", "#9370DB",
  "#F5FFFA", "#F0E68C", "#87CEEB", "#FFD700", "#00CED1"
];

function App() {
  return(
    <div>
      <ColorBoxes colors= {colors}/>
    </div>
  );
}

export default App
