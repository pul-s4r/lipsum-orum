import React from "react"
  import { Chrono } from "react-chrono";

  const TimelineEvent = () => {
    const onClick = () => {
        console.log('click')
    }

    const items = [{
      title: "May 1940",
      cardTitle: "Ken's 31st Birthday",
      cardSubtitle:"Event description or journal of event. Event description or journal of event",
      cardDetailedText: "Event description or journal of event. Event description or journal of event.",
      media: {
        
        source: {
          url:"https://picsum.photos/200/300"
        },
        type: "IMAGE"
      }
    }];

    return (
      <div style={{ width: "500px", height: "400px" }}>
        <Chrono items={items}/>
      </div>
    )
  }


  export default TimelineEvent;