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
    eventDate: new Date(2001, 0, 1),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper nisi ac nunc vehicula, in convallis risus consequat. Phasellus semper lacus nisl, at pharetra felis dignissim sed. Nunc et orci ac mi malesuada placerat. Nunc ultrices ante eu velit rutrum, vel laoreet metus varius. Quisque et lectus quam. In accumsan, sem id condimentum lobortis, elit urna porttitor elit, id lacinia dolor orci a tellus. Mauris in tortor ac justo lacinia tincidunt at in mauris. Etiam hendrerit neque non libero vehicula varius.",
    imgSrc: dummyImg,
  },
  {
    id: 2,
    title: "Watching Sunset",
    eventDate: new Date(2003, 2, 1),

    description: "Watched a sunset on the rooftop",
    imgSrc: dummyImg2,
  },
  {
    id: 3,
    title: "Watching Sunset",
    eventDate: new Date(2005, 7, 1),
    description: "Watched a sunset on the rooftop",
    imgSrc: dummyImg3,
  },
];

export const DUMMY_EVENTS_DETAILED = [
  {
    eventName: "Ken's 31st Birthday",
    pictureUrl:
      "https://images.unsplash.com/photo-1533294160622-d5fece3e080d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    eventDate: "1 Jan 1992",
    author: "Christine Powell",
    createDate: "1 Jan, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, euismod iaculis elit morbi fermentum placerat sed iaculis tempus. Ultricies ornare in viverra auctor leo turpis enim, leo at. Nunc ultrices dictum integer sed.",
    comments: [
      {
        id: 1,
        sender: "Marie Powell",
        profileUrl:
          "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description: "Such a fun night!! We should do it again!",
      },
      {
        id: 2,
        sender: "Benjamin Powell",
        profileUrl:
          "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE2fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        description: "Wonderful night, I ate so much cake xD",
      },
    ],
    tags: ["Birthday", "Party", "Ken", "2022"],
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
