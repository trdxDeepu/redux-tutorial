import { useSelector } from "react-redux";

function Customer() {
  const coustomer = useSelector((store) => store.coustomer.fullName);
  console.log(coustomer)

  return <h2>👋 Welcome, {coustomer}</h2>;
}

export default Customer;
