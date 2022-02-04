import React, { useState } from "react";
import { render } from "react-dom";
import {
  Grid,
  Button,
  Row,
  Column,
  ContentSwitcher,
  Switch,
  Search,
  Dropdown,
  Tile,
} from "carbon-components-react";

import { useBoardContext } from "./BoardContext";

import "../BoardSettings.scss";

const items = [
  {
    id: "status",
    label: "Gruppiert nach Status",
  },
  {
    id: "assignment",
    label: "Gruppiert nach Zuweisung",
  },
];

const itemsFilter = [
  {
    id: "prio",
    label: "Nur priorisierte Dokumente",
  },
];

function BoardSettings({ selectedGroup }) {
  const [currentGroup, setCurrentItem] = useState(items[0]);

  const context = useBoardContext();
  const { group } = context.state;
  const { groupStatus, groupAssignment } = context.actions;

  return (
    <section className="settings">
      <div>
        <Button kind="ghost" onClick={() => groupStatus()}>Status</Button>
        <Button kind="ghost" onClick={() => groupAssignment()}>Assignment</Button>
      </div>
      <div></div>
      <div>
        <Dropdown
          id="filters"
          ariaLabel="Dropdown"
          items={itemsFilter}
          label="Filter wählen"
          size="lg"
        />
      </div>
      <div>
        <Search id="search" placeholder="Search" labelText={false} />
      </div>
    </section>
  );
}

export default BoardSettings;
