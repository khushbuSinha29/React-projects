import { useState } from "react";
import data from './data'
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    const num = parseInt(count);
    const newArray = data.slice(0,num);
    setText(newArray);
    // console.log(`data length ${data.length}`)
    console.log(newArray);
  }

  console.log(nanoid());

  return <section className="section-center">
    <h4>Tired of boring lorem Ipsum? </h4>
    <form className="lorem-form" onSubmit={handleSubmit} >
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name='amount' id='amount' min='1' step='1' max='8'
      value={count}
      onChange={(e) => setCount(e.target.value)}
      ></input>
      <button className="btn">Generate</button>
    </form>
    <article className="lorem-text">

    {text.map((item, index) => {
      return <div key={nanoid()}> 
      <p>{item}</p>
      
      </div> 
    })}
    </article>
  </section>;
};
export default App;
