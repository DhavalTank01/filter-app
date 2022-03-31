import React, { useState } from "react";
import Data from "./Data";

import MenuButtons from "./MenuButtons";
import MenuShow from "./MenuShow";

const Gallery = () => {
  const allcategory = [
    ...new Set(
      Data.map((ele) => {
        return ele.category;
      })
    ),
    "all",
  ];

  const [List, SetList] = useState(Data);
  const [cateList, SetCateList] = useState(allcategory);
  const FilterImages = (cate) => {
    if (cate === "all") {
      SetList(Data);
    } else {
      const updateImages = Data.filter((cele) => {
        return cele.category === cate;
      });
      SetList(updateImages);
    }
  };
  return (
    <div className="main-container container-fluid mt-2 mb-2 ">
      <MenuButtons
        FilterImages={FilterImages}
        cateList={cateList}
        SetCateList={SetCateList}
      />
      <MenuShow List={List} />
    </div>
  );
};

export default Gallery;
