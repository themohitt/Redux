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
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "plusFive", payload: 5 });
        }}
        style={{ margin: 10 }}
      >
        Add 5
      </button>
    </div>
  );
}

export default App;
