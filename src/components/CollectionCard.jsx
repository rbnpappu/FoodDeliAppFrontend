import CollectionCardButton from "./resources/CollectionCardButton";

const CollectionCard = () => {
  return (
   <div className="flex flex-col">  
    <label className="text-[28px] text-black font-[300] p-[10px]">Collections of near your location</label>
    <div className="flex flex-row">
      {CollectionCardButton.map((item, index) => (
        <div
          key={index}
          className="relative w-[285px] h-[385px]  bg-cover bg-center bg-transparent p-4 m-[18px] rounded-lg hover-shadow-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105  cursor-pointer hover:bg-transparent"
          style={{ backgroundImage: `url(${item.img})`, filter: 'brightness(70%) contrast(120%)' }}
        >
          <div className="relative bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-lg ">
            <p className="text-xl font-semibold">{item.tag}</p>
            <p className="text-lg">{item.countOfPlaces}</p>
          </div>
        </div>
      ))}
    </div>
    </div> 
  );
};

export default CollectionCard;