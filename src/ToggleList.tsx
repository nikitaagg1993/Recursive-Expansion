import { useState } from "react";
import { ExpandableList } from "./Toggleitem";

export const ToggleItem = ({ item }) => {
  console.log({ item, c: item?.children });
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChild = item?.children?.length > 0;

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            disabled={!hasChild}
          >
            {isExpanded ? "-" : "+"}
          </button>
          {item?.name}
        </div>
      </div>
      <div>
        {isExpanded && hasChild && <ToggleList data={item?.children} />}
      </div>
    </>
  );
};

export const ToggleList = ({ data }) => {
  return data?.map((item) => {
    return <ToggleItem item={item} />;
  });
};
