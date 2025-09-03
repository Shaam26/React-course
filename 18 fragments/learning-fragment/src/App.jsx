import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  //let foodItems = [];
  let foodItems = ["Green vegetable", "Rice", "Water", "Fruits", "Daal"];

  let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </>
  );
}

export default App;
