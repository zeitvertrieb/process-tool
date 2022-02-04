import React from "react";
import { UserAvatarFilledAlt32 } from "@carbon/icons-react";

function ItemAssignment({ user }) {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      {!user && <UserAvatarFilledAlt32 />}
      {user === "Anna" && <img src="./user-anna.jpg" alt="" />}
      {user === "Kim" && <img src="./user-kim.jpg" alt="" />}
      {user === "Erik" && <img src="./user-erik.jpg" alt="" />}
      {user === "Mike" && <img src="./user-mike.jpg" alt="" />}
      <span style={{ marginLeft: "var(--cds-spacing-03)" }}>
        {!user ? <span>Nicht zugewiesen</span> : <span>{user}</span>}
      </span>
    </span>
  );
}

export default ItemAssignment;
