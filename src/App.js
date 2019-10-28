import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layouts/AddButton";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModel from "./components/techs/AddTechModel";
import TechListModal from "./components/techs/TechListModal";
import AddLogModal from "../src/components/logs/AddLogModel";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar></SearchBar>
        <TechListModal></TechListModal>
        <AddTechModel></AddTechModel>
        <div className="container">
          <Logs></Logs>
        </div>
        <AddLogModal />
        <EditLogModal></EditLogModal>
        <AddButton></AddButton>
      </Fragment>
    </Provider>
  );
};

export default App;
