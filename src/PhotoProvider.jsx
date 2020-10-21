import React, { createContext, useState } from "react";

export const PhotoContext = createContext([Image, () => {}]);
export const PhotoProvider = (props) => {
  const [photo, setPhoto] = useState();
  return (
    <PhotoContext.Provider value={[photo, setPhoto]}>
      {props.children}
    </PhotoContext.Provider>
  );
};
