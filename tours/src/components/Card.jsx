import { useState } from "react"

export default function Card({id, name, info, image, price, removeTour}){
    // console.log(props.tour) wrong way , if sending data through destructering need not to do this.
    // console.log(name); //correct way
    const [readMore, setReadMore] = useState(false);
   
 

    function handleShowMore(){
        setReadMore(!readMore);
    }

    const description = readMore ? info : `${info.substring(0,200)}...`;

    return <div className="shadow w-[350px] flex flex-col gap-6 relative hover:shadow-lg transition-all ease-in duration-200">
        <img src={image} alt="images" className="w-[350px] h-[280px] bg-cover bg-center "/>
        <p className="bg-green-500 text-white py-2 px-4 absolute right-0 " >${price}</p>
        <div className="flex flex-col gap-4 justify-center items-center">
            <h4 className="font-semibold ">{name}</h4>
            <p className="p-4">{description} <span className="text-green-600 font-bold cursor-pointer" onClick={handleShowMore}>
                {readMore?'Show Less':'Read More'}
            </span></p>
        </div>
            <button className="ml-[2.5rem] border w-[80%] mb-8 p-2 text-blue-500 rounded hover:text-white hover:bg-black transition-all duration-500 ease-in" onClick={() => removeTour(id)}>Not Interested</button>
    </div>
}