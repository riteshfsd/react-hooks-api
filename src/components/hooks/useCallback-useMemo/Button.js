import React, { useContext, useMemo } from "react";

function Button({handleClick, children}) {
  console.log('Rendering Buttons -', children );
  return (
    <div>
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
