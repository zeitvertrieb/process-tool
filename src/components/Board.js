import React, { useState, useEffect, useContext } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { useBoardContext } from "./BoardContext";

import ReactDOM from "react-dom";
import {
  Button,
  Tag,
  Tile,
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "carbon-components-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ItemAssignment from "./item/ItemAssignment";
import ItemActionsMenu from "./item/ItemActionsMenu";
import ItemDetailModal from "./item/ItemDetailModal";
import ItemDueDate from "./item/ItemDueDate";
import ItemStatus from "./item/ItemStatus";

import { boardGroupByStatus, boardGroupByAssignment } from "../data";

import "../Board.scss";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
    console.log("dropped")
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Board() {
  const [data, setData] = useLocalStorage("data", "");
  const {
      state: {group},
    } = useBoardContext()

  const [columns, setColumns] = useState(boardGroupByStatus);
  const [open, setOpen] = useState();

  return (
    <div className="board">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className="col" key={columnId}>
              <div className="col__title">
                <h2>{column.name}</h2>
              </div>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="col__content"
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: "none",
                                    boxShadow: snapshot.isDragging
                                      ? "0 25px 50px -12px rgb(0 0 0 / 0.25)"
                                      : null,
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  <Tile light={false} className="card">
                                    <div className="card__header">
                                      <div className="card__title">
                                        <h3>{item.title}</h3>
                                      </div>
                                      <ItemActionsMenu />
                                    </div>
                                    <div className="card__meta">
                                      <Tag type="teal" title="Sourcename">
                                        {item.bucket}
                                      </Tag>
                                      <ItemDueDate date={item.due} />
                                      <ItemStatus
                                        status={item.status}
                                        iconOnly
                                      />
                                    </div>
                                    <div className="card__base">
                                      <div className="card__assignment">
                                        <ItemAssignment user={item.user} />
                                      </div>
                                      <ItemDetailModal
                                        title={item.title}
                                        bucket={item.bucket}
                                        due={item.due}
                                        status={item.status}
                                      />
                                    </div>
                                  </Tile>
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
      <ComposedModal
         modalHeading="Add a custom domain"
         modalLabel="Account resources"
         primaryButtonText="Add"
         secondaryButtonText="Cancel"
         open={open}
         onRequestClose={() => setOpen(false)}>
         <p style={{ marginBottom: '1rem' }}>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a
          shared domain, a shared subdomain, or a shared domain and host.
         </p>
       </ComposedModal>
    </div>
  );
}

export default Board;
