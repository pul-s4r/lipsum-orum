import FullPageProfile from './components/FullPageProfile'
import logo from './logo.svg';
//import './App.css';

function App() {
  const people = [
    {
      name: 'Jimmy Connell',
      picture: 'jimmy.jpeg',
      birthyear: 1960,
      deathyear: 2016,
      description: "Jurgen Krause, better known as \"Opa,\" peacefully passed away on Thursday, February 10, 2022 at his home in Merrimack, NH. He is survived by Marie, his beloved wife of 53 years, his daughter Karen (and husband Christopher), his son Jurgen Jr (and wife Tracey), his grandchildren Kaitlyn, Emily and Jake, his brother Lothar and niece Sabine, and his cousins Uwe and Roswithe.",
      tribute: {
        sender: "Jane",
        description: "test test test test test test"
      }
    }
  ]
  return (
    <div className="App">
      <FullPageProfile element={people}></FullPageProfile>
    </div>
  );
}

export default App;
