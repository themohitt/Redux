import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
        style={{
          color: "white",
          margin: 10,
          backgroundColor: "green",
          borderWidth: 0,
          padding: 10,
          borderRadius: 5,
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
        style={{
          color: "white",
          margin: 10,
          backgroundColor: "green",
          borderWidth: 0,
          padding: 10,
          borderRadius: 5,
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "plusFive", payload: 5 });
        }}
        style={{
          color: "white",
          margin: 10,
          backgroundColor: "green",
          borderWidth: 0,
          padding: 10,
          borderRadius: 5,
        }}
      >
        Add 5
      </button>
      <button
        style={{
          color: "white",
          margin: 10,
          backgroundColor: "green",
          borderWidth: 0,
          padding: 10,
          borderRadius: 5,
        }}
      >
        Toggle Counter
      </button>
    </div>
  );
}

export default App;
