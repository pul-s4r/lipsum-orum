import { Chrono } from "react-chrono";
import * as config from "../../config";

import classes from "./Timeline.module.css";

import TimelineHeader from "./TimelineHeader";
import TimelineEventCard from "./TimelineEventCard";
import TimelineFooter from "./TimelineFooter";
import { useState } from "react";
import InviteMemberModal from "./InviteMemberModal/InviteMemberModal";

const Timeline = (props) => {
  const [isInviteMemberModalOpen, setIsInviteMemberModalOpen] = useState(true);
  const cardClickaHandler = (eventId) => {
    console.log(eventId);
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

  const isInviteMemeberModalOpenHandler = () => {
    setIsInviteMemberModalOpen(true);
  };

  const isInviteMemeberModalCloseHandler = () => {
    setIsInviteMemberModalOpen(false);
  };

  return (
    <div className={classes.timeline}>
      {isInviteMemberModalOpen && (
        <InviteMemberModal onClose={isInviteMemeberModalCloseHandler} />
      )}
      <TimelineHeader />
      <Chrono {...config.CHRONO_TIMELINE_SETTINGS}>{events}</Chrono>
      <TimelineFooter onClickInviteMemeber={isInviteMemeberModalOpenHandler} />
    </div>
  );
};

export default Timeline;
