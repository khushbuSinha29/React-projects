import Card from "./Card";

export default function Tours({tours, removeTour}){
    // console.log(props.tours);
    // console.log(tours);
    return <div className="w-[1200px] m-auto justify-center flex flex-wrap gap-10">
        {tours.map((tour) => {
            {/* console.log(tour) */}
            return <Card  {...tour} key={tour.id} removeTour = {removeTour}/>
        })}
    </div>

}