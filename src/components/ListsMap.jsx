const ListsMap = ({ data, handleItemClick }) => {
  const uniqueData = data.filter((item, index, self) =>
  index === self.findIndex((t) => (
    t.cityName === item.cityName
  ))
);

  return (
    <div className="h-[155px] overflow-z-auto">
    
      {uniqueData .map((item, index) => (
        <div key={index} className="flex items-center py-2" onClick={() => handleItemClick(item)}>
          <span className="ml-2">{item.cityName}</span>
        </div>
      ))}
    </div>
  );
};

export default ListsMap;
