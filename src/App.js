import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Notification20 } from "@carbon/icons-react";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderPanel,
} from "carbon-components-react/lib/components/UIShell";
import { Tabs, Tab } from "carbon-components-react";

import BoardSettings from "./components/BoardSettings";
import Board from "./components/Board";
import { BoardContextProvider } from "./components/BoardContext";
import List from "./components/List";
import Notifications from "./components/Notifications";

import "./App.scss";

function App() {
  const [state, setState] = useLocalStorage("data", "");
  const [expanded, setExpanded] = useState(false);

  const toggleRightPanel = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <Header aria-label="Company – Planner">
        <HeaderName href="#" prefix="Company">
          [Planner]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Account" onClick={() => {}}>
            <img src="./user-anna.jpg" alt="" />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            isActive={expanded}
            onClick={toggleRightPanel}
          >
            <Notification20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel aria-label="Header Panel" expanded={expanded}>
          <div className="notifications">
            <Notifications />
          </div>
        </HeaderPanel>
      </Header>
      <main>
        <Tabs scrollIntoView={false} type="container">
          <Tab id="board" label="Board">
            <BoardContextProvider>
              <BoardSettings />
              <Board />
            </BoardContextProvider>
          </Tab>
          <Tab id="list" label="List">
            <List />
          </Tab>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
