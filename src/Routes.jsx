import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginIndex from "./pages/index";
import { Principal } from "./pages/Principal";

function AppRouter() {
  return (
    <Routes>
      <Route path="" element={<LoginIndex/>}></Route>
      <Route path="/home" element={<LoginIndex/>}></Route>
      <Route path="/PaginaPrincipal" element={<Principal/>}></Route>
    </Routes>
  );
}

export default AppRouter;
