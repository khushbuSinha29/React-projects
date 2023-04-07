import { useEffect, useState } from "react";
import Tours from "./components/Tours";
const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [tours, setTours] = useState([]);
  const[isLoading, setIsLoading] =useState(true);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id!=id )
    setTours(newTour);
    }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
   
    fetchData();
  },[])

  // console.log(tours);
  if(isLoading){
    return <div>
    <div className="loading"></div>
    {/* <p>Loading...</p> */}
    </div>
    
    
  }

  if(tours.length === 0){
    return <div>
      <h1>No Tours Left</h1>
      <button onClick={()=> fetchData()}>Refresh</button>
    </div>
  }
  

    
    return <div className="relative">
    <h2 className="text-center mt-[6rem] mb-6 text-[3.5rem]">Our Tours</h2>
    <div className="w-[140px] h-1 bg-green-500 absolute top-[50px] left-[44%] mt-2"></div>
    
      <Tours tours={tours} removeTour = {removeTour}/>
    

  </div>;
};

export default App;
