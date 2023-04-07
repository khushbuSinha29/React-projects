import Questions from "./Questions";
import data from './data';

const App = () => {
  return <main>
    <div className="container">
      <h1>Questions</h1>
      <Questions data = {data}/>
    </div>
  </main>
};
export default App;
