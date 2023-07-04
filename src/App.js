import './App.css';
import useGetDetails from "./Api/useGetDetails"
import Details from "./Components/Details";

function App() {
  
 const {details,getData} = useGetDetails()

  return (
    <div className="App">
     <h1>EastVantage</h1>
     {details && <Details details={details} getData={getData}/>}
    </div>
  );
}

export default App;
