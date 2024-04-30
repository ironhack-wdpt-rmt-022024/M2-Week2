import { useState } from "react";
import "./App.css";
import { PizzaButton } from "./components/PizzaButton";

function App() {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [pizzaTypes, setPizzaTypes] = useState([
    { id: 1, type: "pep", isGood: true },
    { id: 2, type: "pinn", isGood: false },
    { id: 3, type: "mush", isGood: false },
  ]);
  // this function is to add a pizza to the pizza count
  const handleEatPizza = () => {
    console.log("josh ate another pizza");
    setPizzaCount(pizzaCount + 1);
  };
  //here you can use if/else, above the return
  if (true) {
    console.log("this is in the component but above the return");
  }

  return (
    <>
      <h2>Learning about useState and Lists</h2>
      <h3>Joshs Pizza Count {pizzaCount}</h3>
      <PizzaButton handleEatPizza={handleEatPizza} pizzaCount={pizzaCount} />
      <h2>Pizza Types:</h2>
      <ul>
        {pizzaTypes.map((onePizzaType) => {
          {
            /* make sure to always use return inside of your maps!!!! */
          }

          return (
            //ternary example with ? and :
            /* <li key={onePizzaType.id}>
              {onePizzaType.type} - {onePizzaType.isGood ? "Yum" : "Yuck"}
            </li> */

            //&& example
            <li key={onePizzaType.id}>
              {onePizzaType.type.length > 3 && onePizzaType.type}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
