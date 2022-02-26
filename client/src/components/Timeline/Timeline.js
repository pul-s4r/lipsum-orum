import { Chrono } from "react-chrono";
import * as config from "../../config";
import { useState } from "react";

import classes from "./Timeline.module.css";

import TimelineHeader from "./TimelineHeader";
import TimelineEventCard from "./TimelineEventCard";
import TimelineFooter from "./TimelineFooter";
import AddMemoryModal from "../AddMemoryModal/AddMemoryModal";
import ViewMemoryModal from "../EventModal/ViewMemoryModal/ViewMemoryModal";

const Timeline = (props) => {
  const [isAddMemoryModalOpen, setIsAddMemoryModalOpen] = useState(false);
  const [isViewMemoryModalOpen, setIsViewMemoryModalOpen] = useState(false);
  const [currentMemory, setCurrentMemory] = useState();

  const cardClickaHandler = (memoryId) => {
    setIsViewMemoryModalOpen(true);
    setCurrentMemory(getMemory(memoryId));
  };

  const getMemory = (memoryId) => {
    return config.DUMMY_EVENTS_DETAILED[0];
  };

  const events = config.DUMMY_EVENTS.map((event) => {
    return (
      <TimelineEventCard
        key={event.id}
        onClick={cardClickaHandler}
        {...event}
      />
    );
  });
  const addMemoryModalOpenHandler = () => {
    setIsAddMemoryModalOpen(true);
  };

  const addMemoryModalCloseHandler = () => {
    setIsAddMemoryModalOpen(false);
  };

  const viewMemoryModalCloseHandler = () => {
    setIsViewMemoryModalOpen(false);
  };

  return (
    <div className={classes.timeline}>
      {isAddMemoryModalOpen && (
        <AddMemoryModal onClose={addMemoryModalCloseHandler} />
      )}
      {isViewMemoryModalOpen && (
        <ViewMemoryModal
          onClose={viewMemoryModalCloseHandler}
          memory={currentMemory}
        />
      )}
      <TimelineHeader />
      <Chrono {...config.CHRONO_TIMELINE_SETTINGS}>{events}</Chrono>
      <TimelineFooter onClickAddMemory={addMemoryModalOpenHandler} />
    </div>
  );
};

export default Timeline;
