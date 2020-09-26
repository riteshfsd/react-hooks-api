import React, { useContext, useMemo } from "react";

function Title() {
  console.log("Rendering titles");
  return (
    <div>
      useCallBack and UseMemo
    </div>
  );
}

export default React.memo(Title);
