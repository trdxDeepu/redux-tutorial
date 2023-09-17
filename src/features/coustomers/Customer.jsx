import { useSelector } from "react-redux";

function Customer() {
  const coustomer = useSelector((store) => store.coustomer.fullName);

  return <h2>👋 Welcome, {coustomer}</h2>;
}

export default Customer;
