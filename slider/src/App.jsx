import { list } from "./data";
import Cards from "./Cards";
import { useState } from "react";
const App = () => {
  const [user, setUser] = useState(list);
  const [index, setIndex]= useState(0);
  return (
    <main>
     <Cards list = {user} index={index} setIndex = {setIndex}/>
    </main>
  );
};
export default App;
