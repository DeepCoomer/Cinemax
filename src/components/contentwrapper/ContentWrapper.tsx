// import React from 'react'
import "./style.scss";

interface Props {
  children?: any;
  // any props that come into the component
}

const ContentWrapper = ({ children }: Props) => {
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
