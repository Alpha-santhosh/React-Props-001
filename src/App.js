import './App.css';
import Cards from './components/Cards';

const data =[
  {color_name:"PINK",color_code:"#FF6663"},
  {color_name:"GRAY",color_code:"#333333"},
  {color_name:"BLACK",color_code:"#000000"},
  {color_name:"GREEN",color_code:"#38BB14"},
  {color_name:"RED",color_code:"#C90B0B"},
  {color_name:"ORANGE",color_code:"#FF8000"},
  {color_name:"YELLOW",color_code:"#FFF500"},
  {color_name:"LIGHT GRAY",color_code:"#CCCCCC"},
  {color_name:"PURPLE",color_code:"#7E41A2"},
  {color_name:"BROWN",color_code:"#C14911"},
]

// console.log(data);

const cards = data.map((e)=>{
  return(
    <Cards colorName={e.color_name} colorCode={e.color_code}/>
  )
})

function App() {
  return (
    <div className="App" id='app'>
      <br/>
      <div className='container'>
        {cards}
      </div>
    </div>
  );
}

export default App;
