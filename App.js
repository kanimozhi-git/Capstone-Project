import React,{ useState,useEffect } from "react";
import {ThemeProvider, styled} from "styled-components";
import { lightTheme,darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import {Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import  Search  from "./pages/Search";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import PodcastDetails from "./pages/PodcastDetails";
import DisplayPodcast from "./pages/DisplayPodcast";
import SongUploader from "./components/Uploadsong";
import Player from './components/Player';
import LoginPage from './pages/Login.js';
import axios from 'axios';



const Container = styled.div`
  display     : flex;
  background  : ${ ( { theme}) => theme.bgLight};
  width       : 100%;
  height      :  100vh;
  overflow-x  : hidden;
  overfrlow-y  : hidden;

`;

const Frame = styled.div`
  display : flex;
  flex-direction : column;
  flex : 3;
`;







  
  function App(){

    

  const [darkmode, setDarkMode] = useState(true);
  const [menuOpen,setMenuOpen]  = useState(false);
  const [songs] = useState([
    {
      title: "Thiruppugazh",
      artist: "Nithyashree",
      img_src: "./images/Thiruppugazh.jpg",
      src: "./songs/- Tiruppugazh - Nithyasree Mahadevan -.mp3",
    },
    {
      title: "Oliyile Therivathu",
      artist: "Ilayaraja",
      img_src: "./images/oliyile.jpg",
      src: "./songs/Oliyilae Therivathu.mp3",
    },
    {
      title: "Hara hara Sivane",
      artist: "S.P.Balasubramniyam",
      img_src: "./images/hara hara.jpg",
      src: "./songs/Hara Hara Sivane.mp3",
    },
    {
      title: "En Vaaniley",
      artist: "Ilayaraja",
      img_src: "./images/en vaanile.jpg",
      src: "./songs/En_Vaaniley.mp3",
    },
    {
      title: "Nee Partha",
      artist: "Ilayaraja",
      img_src: "./images/nee partha.jpg",
      src: "./songs/Nee_Partha.mp3",
    },
    {
      title: "Naan Erikarai",
      artist: "Ilayaraja",
      img_src:"./images/nan erikarai.jpg",
      src: "./songs/Naan_Erikarai.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  const App = () => {
    const [songs, setSongs] = useState([]);
  
    useEffect(() => {
        axios.get('/api/songs')
            .then(res => {
                setSongs(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);}
  

  return (

    <div>
       <ThemeProvider theme = {darkmode ? darkTheme : lightTheme}>
    <BrowserRouter>
    <Container>
      {menuOpen && (
      <Sidebar 
      menuOpen = {menuOpen}  
      setMenuOpen={setMenuOpen}
      setDarkMode = {setDarkMode} 
      darkmode = {darkmode}
      />
  )}
     
      <Frame>
        <NavBar  menuOpen = {menuOpen}  setMenuOpen={setMenuOpen} />
      
        

        <Routes>
          <Route path = "/" exact element = {<Dashboard/>}/>
          <Route path = "/search" exact element = {<Search/>}/>
          <Route path = "/favourites" exact element = {<Favourites/>}/>
          <Route path = "/profile" exact element = {<Profile/>}/>
          <Route path = "/podcast/:id" exact element = {<PodcastDetails/>}/>
          <Route path = "/showpodcasts/:type" exact element = {<DisplayPodcast/>}/>
          <Route path="/LoginPage" exact element ={<LoginPage/>} />
        

       </Routes>
       <h1>Song List</h1>
            <ul>
                {songs.map(song => (
                    <li key={song._id}>
                        <strong>{song.title}</strong> by {song.artist}
                    </li>
                ))}
            </ul>

       <SongUploader/>
       <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
      </Frame>
      </Container>
      </BrowserRouter>
      </ThemeProvider>
      
      </div>
  );
  
  };
  

export default App;
