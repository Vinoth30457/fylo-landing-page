import React from "react";

const Social_link = ({ id, icon, href }) => {
  return (
    <li key={id}>
      <a href={href}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default Social_link;
