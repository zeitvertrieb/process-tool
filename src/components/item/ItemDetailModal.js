import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Form,
  Tooltip,
  ProgressIndicator,
  ProgressStep,
  Tag,
  Tile,
  TextArea,
  Modal,
} from "carbon-components-react";

import ItemDueDate from "./ItemDueDate";
import ItemStatus from "./ItemStatus";

import "../../Item.scss";

function ItemDetailModal({ title, bucket, due, status }) {
  const ModalStateManager = ({
    renderLauncher: LauncherContent,
    children: ModalContent,
  }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        {!ModalContent || typeof document === 'undefined'
          ? null
          : ReactDOM.createPortal(
              <ModalContent open={open} setOpen={setOpen} />,
              document.body
            )}
        {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
      </>
    );
  };
  return (
    <ModalStateManager
      renderLauncher={({ setOpen }) => (
        <Button onClick={() => setOpen(true)} size="sm"
        kind="ghost">Details</Button>
      )}>
      {({ open, setOpen }) => (
        <Modal
          modalHeading={title}
          modalLabel="Document Details"
          primaryButtonText="Ready for Review"
          secondaryButtonText="Cancel"
          open={open}
          onRequestClose={() => setOpen(false)}>
          <div className="meta">
            <Tag type="teal" title="Sourcename">
              {bucket}
            </Tag>
            <ItemDueDate date={due} />
            <ItemStatus
              status={status}
              iconOnly
            />
          </div>
          <section className="progress">
            <ProgressIndicator currentIndex={1} spaceEqually={true}>
              <ProgressStep
                label="Open"
                description="Step 1: Getting started with Carbon Design System"
              />
              <ProgressStep
                current
                label="Progress"
                description="Step 2: Getting started with Carbon Design System"
                renderLabel={() => (
                  <Tooltip
                    direction="bottom"
                    showIcon={false}
                    triggerClassName="bx--progress-label"
                    triggerText="Progress"
                    tooltipId="tooltipId-0">
                    <p>In Bearbeitung nach Review.</p>
                  </Tooltip>
                )}
              />
              <ProgressStep
                invalid
                label="Review"
                description="Step 3: Getting started with Carbon Design System"
                secondaryLabel="Zurückgewiesen"
              />
              <ProgressStep
                label="Ready to Publish"
                description="Step 4: Getting started with Carbon Design System"
                renderLabel={() => (
                  <>
                    <p className="bx--progress-label">Ready to Publish</p>
                    <p className="bx--progress-optional"><ItemDueDate date={due} /></p>
                  </>
                )}
              />
            </ProgressIndicator>
          </section>
          <section className="notes">
            <TextArea
              id="notes"
              labelText="Notizen"
              placeholder="Eigene Notizen hinzufügen"
            />
          </section>
          <Form>
            <div style={{marginBottom: '1rem'}}>
              <TextArea
                id="comment"
                labelText="Kommentar"
                placeholder="Kommentar hinzufügen und mit dem Team teilen"
              />
            </div>
            <Button
              kind="tertiary"
              tabIndex={0}
              type="submit"
            >
              Send
            </Button>
          </Form>
        </Modal>
      )}
    </ModalStateManager>
  );
};

export default ItemDetailModal;
