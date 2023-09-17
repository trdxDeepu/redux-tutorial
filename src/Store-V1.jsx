import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCoustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function coustomerReducer(state = initialStateCoustomer, action) {
  switch (action.type) {
    case "coustomer/createCoustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "account/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  coustomer: coustomerReducer,
});

const store = createStore(rootReducer);

/* store.dispatch({ type: "account/deposit", payload: 500 });

store.dispatch({ type: "account/withdraw", payload: 300 });

store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 1000,
    loanPurpose: "Buy iphone",
  },
});
console.log(store.getState());

store.dispatch({ type: "account/payLoan" });

console.log(store.getState()); */

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      loanPurpose,
    },
  };
}

function payloan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(10));
store.dispatch(requestLoan(1000, "buy car"));
store.dispatch(payloan());

function createCoustomer(fullName, nationalId) {
  return {
    type: "coustomer/createCoustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "account/updateName",
    payload: fullName,
  };
}

store.dispatch(createCoustomer("mukesh", 123456789));
store.dispatch(updateName("mahesh dalle"));

console.log(store.getState());
