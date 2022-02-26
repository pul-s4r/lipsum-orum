import classes from "./Timeline.module.css";
import { Chrono } from "react-chrono";

import TimelineHeader from "./TimelineHeader";
import TimelineEventCard from "./TimelineEventCard";

import dummyImg from "../../assets/dummy.png";
import dummyImg2 from "../../assets/dummy2.jpg";
import dummyImg3 from "../../assets/dummy3.jpg";

const Timeline = (props) => {
  const items = [
    {
      id: 1,
      title: "Watching Sunset",
      date: new Date(2001, 0, 1),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper nisi ac nunc vehicula, in convallis risus consequat. Phasellus semper lacus nisl, at pharetra felis dignissim sed. Nunc et orci ac mi malesuada placerat. Nunc ultrices ante eu velit rutrum, vel laoreet metus varius. Quisque et lectus quam. In accumsan, sem id condimentum lobortis, elit urna porttitor elit, id lacinia dolor orci a tellus. Mauris in tortor ac justo lacinia tincidunt at in mauris. Etiam hendrerit neque non libero vehicula varius.",
      imgSrc: dummyImg,
    },
    {
      id: 2,
      title: "Watching Sunset",
      date: new Date(2003, 2, 1),

      description: "Watched a sunset on the rooftop",
      imgSrc: dummyImg2,
    },
    {
      id: 3,
      title: "Watching Sunset",
      date: new Date(2005, 7, 1),
      description: "Watched a sunset on the rooftop",
      imgSrc: dummyImg3,
    },
  ];

  return (
    <div className={classes.timeline}>
      <TimelineHeader />
      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#1dabfd",
          secondary: "#FFB44F",
          cardBgColor: "#4a71ff",
        }}
        cardWidth="230"
        lineWidth="3"
      >
        {items.map((item) => {
          return (
            <TimelineEventCard
              key={item.id}
              imgUrl={item.imgSrc}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          );
        })}
      </Chrono>
    </div>
  );
};

export default Timeline;
/*

const items2 = [
  { title: "Timeline title 1", cardTitle: "Card Title 1" },
  { title: "Timeline title 2", cardTitle: "Card Title 2" },
  { title: "Timeline title 2", cardTitle: "Card Title 2" },
  { title: "Timeline title 2", cardTitle: "Card Title 2" },
  { title: "Timeline title 2", cardTitle: "Card Title 2" },
];

<Chrono items={items} mode="VERTICAL_ALTERNATING" slideShow scrollable />

const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];
*/
