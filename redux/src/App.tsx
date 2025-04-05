import {useEffect, useReducer} from 'react'
import './App.css'
import {DecrementAction, IncrementAction, store} from "./store.ts";

function App() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  useEffect(() => {
      const unsubscribe = store.subscribe(() => {
          forceUpdate();
      });

      return unsubscribe;
  }, []);

  return (
    <>
      <div className="card">
        <div>counter {store.getState().counter}</div>
          <div>
              <button
                  onClick={() =>
                      store.dispatch({type: "increment"} satisfies IncrementAction)
                  }
              >
                  Increment
              </button>
              <button
                  onClick={() =>
                      store.dispatch({type: "decrement"} satisfies DecrementAction)
                  }
              >
                  Decrement
              </button>
          </div>
      </div>
    </>
  )
}

export default App
