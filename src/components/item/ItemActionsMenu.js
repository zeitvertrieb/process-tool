import React from "react";
import { OverflowMenu, OverflowMenuItem } from "carbon-components-react";

function ItemActionsMenu() {
  return (
    <OverflowMenu size="sm" flipped>
      <OverflowMenuItem itemText="Kommentieren" />
      <OverflowMenuItem itemText="Zuweisen" />
      <OverflowMenuItem itemText="Bearbeiten" requireTitle />
      <OverflowMenuItem hasDivider itemText="Priorisieren" />
    </OverflowMenu>
  );
}

export default ItemActionsMenu;
