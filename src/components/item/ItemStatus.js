import React from "react";
import {
  CircleDash20,
  Incomplete20,
  CheckmarkFilled20,
  DocumentView20,
} from "@carbon/icons-react";

function ItemStatus({ status, iconOnly }) {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      {status === "open" && (
        <CircleDash20 style={{ color: "var(--cds-ui-04)" }} />
      )}
      {status === "progress" && (
        <Incomplete20 style={{ color: "var(--cds-support-info)" }} />
      )}
      {status === "review" && (
        <DocumentView20 style={{ color: "var(--cds-support-warning)" }} />
      )}
      {status === "done" && (
        <CheckmarkFilled20 style={{ color: "var(--cds-support-success)" }} />
      )}
      {!iconOnly && (
        <span style={{ marginLeft: "var(--cds-spacing-03)" }}>{status}</span>
      )}
      {iconOnly && <span style={{ fontSize: "0" }}>{status}</span>}
    </span>
  );
}

export default ItemStatus;
