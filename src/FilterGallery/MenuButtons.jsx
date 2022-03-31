import Button from "@material-ui/core/Button";
const MenuButtons = ({ FilterImages, allcategory, SetCateList, cateList }) => {
  return (
    <div className=" tab-content text-center  mb-2">
      {cateList.map((cbtn, idx) => {
        return (
          <Button
            key={idx}
            className="btn1"
            variant="contained"
            color="primary"
            onClick={() => {
              FilterImages(cbtn);
            }}
          >
            <span>{cbtn}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default MenuButtons;
