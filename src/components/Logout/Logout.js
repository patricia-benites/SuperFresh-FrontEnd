import React from 'react'
import { AuthContext } from "../../context/context";
import { useContext } from "react";

export default function Logout() {
    const { logout } = useContext(AuthContext);
    logout();
  return (
    <div></div>
  )
}
