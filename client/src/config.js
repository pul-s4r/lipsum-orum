import dummyImg from "./assets/dummy.png";
import dummyImg2 from "./assets/dummy2.jpg";
import dummyImg3 from "./assets/dummy3.jpg";

export const CHRONO_TIMELINE_SETTINGS = {
  mode: "VERTICAL_ALTERNATING",
  theme: {
    primary: "#1dabfd",
    secondary: "#FFB44F",
    cardBgColor: "#4a71ff",
  },
  cardWidth: "230",
  lineWidth: "3",
};

export const DUMMY_EVENTS = [
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

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
