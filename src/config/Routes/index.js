import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import {
  Admin,
  Login,
  Dosen,
  StatusKehadiranDosen,
  Setting,
  Dashboard,
} from "../../pages";

const Routess = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" element={<Login />} />
        <Route path="admin" element={<Admin />}>
          <Route exact path="" element={<Dashboard />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route path="dosen" element={<Dosen />} />

        <Route path="status-kehadiran" element={<StatusKehadiranDosen />} />
      </Switch>
    </>
  );
};

export default Routess;
