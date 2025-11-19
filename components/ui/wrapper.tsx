"use client";

import { ReactNode } from "react";

const Wrapper = ({
  children,
  handleClick,
}: {
  children: ReactNode;
  handleClick: () => void;
}) => {
  return <div onClick={handleClick}>{children}</div>;
};

export default Wrapper;
