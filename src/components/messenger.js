import React from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/loginDialog";
import ChatDialog from "./chat/ChatDialog";

export default function Messenger() {
  const Component = styled(Box)`
    height: 100vh;
    background-color: #dcdcdc;
  `;
  const Header = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
  `;
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
}
