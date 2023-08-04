const counterEl = document.getElementById("counterEl");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

initialState = {
  value: 0,
};

//action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

let store = Redux.createStore(counterReducer);

incrementBtn.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementBtn.addEventListener("click", () => {
  store.dispatch(decrement(5));
});

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
};
render();

store.subscribe(render);
