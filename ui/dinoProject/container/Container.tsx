import React, { FC } from "react";

type TContainerProps = {
  children: React.ReactNode;
};

const Container: FC<TContainerProps> = ({ children }) => {
  return <div style={{ padding: "0 100px" }}>{children}</div>;
};

export default Container;
