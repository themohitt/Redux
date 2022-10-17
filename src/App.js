import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  return (
    <div
      style={{
        "--color-1": "#FFECD2",
        "--color-2": "#FCB69F",
        background: `
        linear-gradient(
          180deg,
          var(--color-1),
          var(--color-2) 80%
        )
      `,
        height: 300,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        padding: 30,
      }}
    >
      <div className="App">
        <div style={{ margin: 30 }}>{show && <h1>{counter}</h1>}</div>
        <div style={{ margin: 30 }}>
          <button
            onClick={() => {
              dispatch(counterActions.increment());
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
              dispatch(counterActions.decrement());
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
              dispatch(counterActions.plusFive(5));
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
        </div>
        <button
          style={{
            color: "white",
            margin: 10,
            backgroundColor: "green",
            borderWidth: 0,
            padding: 10,
            borderRadius: 5,
          }}
          onClick={() => {
            dispatch(counterActions.toggleCounter());
          }}
        >
          Toggle Counter
        </button>
      </div>
    </div>
  );
}

export default App;
