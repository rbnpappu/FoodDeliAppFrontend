import Card from "../components/Card";
import CardButton from "./resources/CardButtonResouces";
import CollectionCard from "./CollectionCard";
import BestOffersInCusins from "./BestOffersInCusins";

const Content = () => {
  return (

        <div className="flex flex-row flex-wrap  justify-center items-center m-[35px]">
           {/* Render Card components with mapped data */}
          {CardButton.map((item, index) => (
            <Card key={index} CardButtonInfo={item} />
          ))}
           {/* Render CollectionCard component */}
          <CollectionCard />
          {/* Render BestOffersInCusins component */}
          <BestOffersInCusins/>
        </div>
    
  );
};

export default Content;
