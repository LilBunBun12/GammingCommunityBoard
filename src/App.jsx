import './App.css';
import Card from './components/Card';
import Valorant from './assets/ValorantCard.jpg';
import CS2 from './assets/CS2.jpeg';
import Fortnite from './assets/Fortnite.jpeg';
import Minecraft from './assets/Minecraft.jpeg';
import AmongUs from './assets/AmongUs.jpeg';
import MarvelRivals from './assets/MarvelRivals.jpeg';
import Overwatch2 from './assets/Overwatch2.jpeg';
import LOL from './assets/LOL.jpeg';
import RocketLeague from './assets/RocketLeague.jpeg';
import ApexLegends from './assets/ApexLegends.jpg';
import background from "./assets/Background.jpeg";

const App = () => {
  


  return (

    <div>
        <div className = "Header">
          <img src={background} alt="" />
          <p>GAMING HUB</p>
        </div>


        <div className="App">
          <Card image = {Valorant} title = "VALORANT" link = "https://playvalorant.com/en-us/"/>
          <Card image = {CS2} title = "CS2" link = "https://www.counter-strike.net/news"/>
          <Card image = {Fortnite} title = "FORTNITE" link = "https://www.fortnite.com/?lang=en-US"/>
          <Card image = {Minecraft} title = "MINECRAFT" link = "https://www.minecraft.net/en-us"/>
          <Card image = {AmongUs} title = "AMOUNG US" link = "https://www.innersloth.com/games/among-us/"/>
          <Card image = {MarvelRivals} title = "MARVEL RIVALS" link = "https://www.marvelrivals.com/"/>
          <Card image = {Overwatch2} title = "OVERWATCH 2" link = "https://overwatch.blizzard.com/en-us/"/>
          <Card image = {LOL} title = "LEAGUE OF LEGENDS" link = "https://www.leagueoflegends.com/en-us/"/>
          <Card image = {RocketLeague} title = "ROCKET LEAGUE" link = "https://www.rocketleague.com/en"/>
          <Card image = {ApexLegends} title = "APEX LEGENDS" link = "https://www.ea.com/games/apex-legends/apex-legends"/>
        </div>
    </div>
    
    
  )
}

export default App