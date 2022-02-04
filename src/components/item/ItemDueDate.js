import React from "react";
import { EventSchedule20 } from "@carbon/icons-react";

function ItemDueDate({ date }) {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <EventSchedule20 style={{marginTop: 0, marginRight: 0}} />
      <span style={{ marginLeft: "var(--cds-spacing-03)" }}>{date}</span>
    </span>
  );
}

export default ItemDueDate;
