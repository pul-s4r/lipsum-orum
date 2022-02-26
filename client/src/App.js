// import FullPageProfile from './components/FullPageProfile'
import LargeEventModal from "./components/LargeEventModal/LargeEventModal";
// import logo from './logo.svg';
//import './App.css';

function App() {
  const events = [
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
        {
          id: 3,
          sender: "Marie Powell",
          profileUrl: "",
          description: "Such a fun night!! We should do it again!",
        },
      ],
      tags: ["Birthday", "Party", "Ken", "2022"],
    },
  ];
  return (
    <div className="App">
      <LargeEventModal event={events[0]}></LargeEventModal>
    </div>
  );
}

export default App;

// import "./App.css";
// // import LoginForm from "./components/loginForm/LoginForm";
// // import TimelineEvent from "./components/TimelineEvent/TimelineEvent";
// import { Chrono } from "react-chrono";
// import LargeEventModal from "./components/LargeEventModal/LargeEventModal";
// function App() {
//   const onClick = () => {
//     console.log('click')
// }

//   return (
//     <div className="App">
//       {/* <LoginForm /> */}
//       <p>hello</p>
//       <LargeEventModal></LargeEventModal>
//       {/* <div><TimelineEvent></TimelineEvent></div> */}
//       {/* <Chrono /> */}
//     </div>
//   );
// }

// export default App;
