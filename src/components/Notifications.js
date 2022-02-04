import React from "react";
import { render } from "react-dom";
import { InlineNotification } from "carbon-components-react";

function Notifications() {
  return (
    <InlineNotification
      kind="success"
      caption="00:00:00 AM"
      iconDescription="Gelesen"
      subtitle={
        <span>
          Document Title <a href="#example">Zum Kundenportal</a>
        </span>
      }
      timeout={0}
      title="Dokument veröffentlicht"
    />
  );
}

export default Notifications;
