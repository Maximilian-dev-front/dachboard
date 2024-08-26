import React from "react";

const Header = (props) => {
  return (
    <h1 style={{display: "flex", justifyContent: "center", backgroundColor: "rgba(253, 229, 194,0.7)"}}>{props.headerName}</h1>
  );
};

export default Header;
