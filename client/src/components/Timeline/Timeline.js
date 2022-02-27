import { Chrono } from "react-chrono";
import * as config from "../../config";
import { useState, useEffect } from "react";

import TimelineAPI from "../../api/timeline";

import classes from "./Timeline.module.css";

import TimelineHeader from "./TimelineHeader";
import TimelineEventCard from "./TimelineEventCard";
import TimelineFooter from "./TimelineFooter";
import InviteMemberModal from "./InviteMemberModal/InviteMemberModal";
import AddMemoryModal from "../AddMemoryModal/AddMemoryModal";
import ViewMemoryModal from "../EventModal/ViewMemoryModal/ViewMemoryModal";

const Timeline = (props) => {
  const [isInviteMemberModalOpen, setIsInviteMemberModalOpen] = useState(false);
  const [isAddMemoryModalOpen, setIsAddMemoryModalOpen] = useState(false);
  const [isViewMemoryModalOpen, setIsViewMemoryModalOpen] = useState(false);
  const [currentMemory, setCurrentMemory] = useState();
  const [userToken, setUserToken] = useState('62199aa599c9cf590f3f8404');
  const [events, setEvents] = useState([]);

  const cardClickHandler = (memoryId) => {
    setIsViewMemoryModalOpen(true);
    setCurrentMemory(getMemory(memoryId));
  };

  const getMemory = (memoryId) => {
    return config.DUMMY_EVENTS_DETAILED[0];
  };

  const getTimelineInfo = async (token) => {
    console.log("Fetching");
    const timelineObj = await TimelineAPI.fetchTimelineObject(token);
    const timeline = timelineObj.data[0];
    await setEvents(timeline.content);
    console.log(timeline);
  };

  useEffect(() => {
    getTimelineInfo(userToken);
  }, []);

  const eventsSample = config.DUMMY_EVENTS.map((event) => {
    return (
      <TimelineEventCard key={event.id} onClick={cardClickHandler} {...event} />
    );
  });

  const viewMemoryModalCloseHandler = () => {
    setIsViewMemoryModalOpen(false);
  };

  const addMemoryModalOpenHandler = () => {
    setIsAddMemoryModalOpen(true);
  };

  const addMemoryModalCloseHandler = () => {
    setIsAddMemoryModalOpen(false);
  };

  const isInviteMemeberModalOpenHandler = () => {
    setIsInviteMemberModalOpen(true);
  };

  const isInviteMemeberModalCloseHandler = () => {
    setIsInviteMemberModalOpen(false);
  };

  return (
    <div className={classes.timeline}>
      {isViewMemoryModalOpen && (
        <ViewMemoryModal
          onClose={viewMemoryModalCloseHandler}
          memory={currentMemory}
        />
      )}
      {isInviteMemberModalOpen && (
        <InviteMemberModal onClose={isInviteMemeberModalCloseHandler} />
      )}
      {isAddMemoryModalOpen && (
        <AddMemoryModal onClose={addMemoryModalCloseHandler} />
      )}
      <TimelineHeader />
      <Chrono {...config.CHRONO_TIMELINE_SETTINGS}>{
          events.map((event) => (
            <TimelineEventCard key={event._id} onClick={cardClickHandler} {...event} />
          ))
        }</Chrono>
      <TimelineFooter
        onClickAddMemory={addMemoryModalOpenHandler}
        onClickInviteMemeber={isInviteMemeberModalOpenHandler}
      />
    </div>
  );
};

export default Timeline;
