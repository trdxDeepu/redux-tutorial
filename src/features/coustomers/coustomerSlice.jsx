const initialStateCoustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function coustomerReducer(
  state = initialStateCoustomer,
  action
) {
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

export function createCoustomer(fullName, nationalId) {
  return {
    type: "coustomer/createCoustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "account/updateName",
    payload: fullName,
  };
}
