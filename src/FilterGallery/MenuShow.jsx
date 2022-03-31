import CardBox from "./CardBox";
const MenuShow = ({ List }) => {
  return (
    <div className="container-lg">
      <div className=" d-flex align-items-center justify-content-center flex-wrap">
        {List.map((ele, idx) => {
          return (
            <CardBox
              name={ele.name}
              image={ele.image}
              description={ele.description}
              id={ele.id}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuShow;
