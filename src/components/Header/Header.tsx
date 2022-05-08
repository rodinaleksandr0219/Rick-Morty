import React from "react";
import { Link } from "react-router-dom";
import { Typography } from 'antd';

import "./header.css";
const { Title } = Typography;

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">
            <img
              className="logo"
              src={require("../../assets/images/logo.png")}
              alt="logo"
            />
          </Link>
          <Title>Rick & Morty</Title> 
        </li>
      </ul>
    </div>
  );
};

export default Header;
