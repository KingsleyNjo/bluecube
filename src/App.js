import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import NoteIcon from '@mui/icons-material/Note';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import TaskIcon from '@mui/icons-material/Task';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CircleIcon from '@mui/icons-material/Circle';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from "axios";
import './App.css';



export default function App() {

  const [photo, setPhoto] = useState("");

  const [result, setResult] = useState([])

  function handleChange(e){
    setPhoto(e.target.value)


  }

  function handleSubmit(e){
    console.log(photo);
    

    const url = "https://api.unsplash.com/search/photos?page=1&query=%22+photo+%22&client_id=kImlvdcf0Pb8rLyVV1etE1ckIeQhyDS2-M9j06FhKn0";
    axios.get(url).then((response)=>{
      console.log(response);
      setResult(response.data.results)
      
    })
    

  }


  return (
    <div className="container">

      <div className="main">

        <div className="leftside">
          <h1>bluecube</h1>
          <button><HomeIcon style={{ color: "blue", transform: "translateX(-15px)" }} /> <span>Home </span></button>
          <p><NoteIcon style={{ color: "grey", paddingRight: "5px", transform: "translateY(5px)" }} /> Message</p>

          <p><b>SHARE</b></p>

          <p><StackedBarChartIcon style={{ color: "grey", paddingRight: "5px", transform: "translateY(5px)" }} /> Ranking</p>
          <p><TaskIcon style={{ color: "grey", paddingRight: "5px", transform: "translateY(5px)" }} /> Challenge</p>
          <p><CelebrationIcon style={{ color: "grey", paddingRight: "5px", transform: "translateY(5px)" }} /> Party</p>
          <p><ConnectWithoutContactIcon style={{ color: "grey", paddingRight: "5px", transform: "translateY(5px)" }} /> Connect</p>
          <p><DirectionsWalkIcon style={{ color: "grey", paddingRight: "5px", transform: "translateY(5px)" }} /> Parade</p>
          <p><GroupIcon style={{ color: "grey", paddingRight: "5px", transform: "translateY(5px)" }} /> Group</p>
        </div>

        <div className = "vertical"></div>

        <div className="rightside">
          <div className="upper">
            <div className="searchinput">
              <SearchIcon style={{ transform: "translate(28px,36px)" }} />
              <input type="text" name="photo"  placeholder="Find something..." onChange={handleChange}/>
              <button type="submit" onClick={handleSubmit}>Search</button>
            </div>

            <div className="show">
              <NotificationsIcon className="notify" style={{ color: "blue", paddingLeft:"15px", width:"50px", position:"absolute", top:"110px" }} />
              <CircleIcon style={{width:"12px", transform:"translate(39px, 45px)", color:"red"}}/>
              <div className="options">
                <div className="singles">
                  <img src="images/person1.jpg" style={{ width: "25px",height:"30px", borderRadius:"15px", position:"relative", left:"25px", top:"15px"}} alt="" />
                  <p>Michael liked you!<br/><small>About 20minutes ago</small></p>
                  <FavoriteIcon style={{ color: "grey", position:"relative", left:"65px", top:"20px" , width:"15px"}} />
                </div>
                <div className="single">
                  <img src="images/person2.jpg"  style={{ width: "25px",height:"30px", borderRadius:"15px" , position:"relative", left:"25px", top:"15px"}}alt="" />
                  <p>Jack liked you!<br/><small>About 40minutes ago</small></p>
                  <FavoriteIcon style={{ color: "red" , position:"relative", left:"68px", top:"20px" , width:"15px" }} />
                </div>
                <div className="single">
                  <img src="images/personthree.jpg"  style={{ width: "25px",height:"30px", borderRadius:"15px", position:"relative", left:"25px", top:"15px"}} alt="" />
                  <p className="adjust">Martin commented on your photo!<br/><small>About 50minutes ago</small></p>
                  <ChatBubbleIcon style={{ color: "blue" , position:"relative", left:"55px", top:"20px" , width:"15px" }} />
                </div>
              </div>
            </div>

            <div className="special">
              <img src="images/personthree.jpg" style={{ width: "25px",height:"30px",  borderRadius: "50px", marginLeft:"35px", marginRight:"15px", transform:"translate(-200px,35px)"}} alt="" />
              <CircleIcon style={{width:"16px", transform:"translate(-225px,50px)", color:"green"}}/>
              <h4 className="name">Abigail</h4>
              <KeyboardArrowDownIcon style={{transform:"translate(-195px,43px)", fontSize:"10px"}}/>
            </div>

          </div>

          <div className="lowupper">
            <span className="first">World <KeyboardArrowDownIcon style={{transform:"translateY(7px)"}}/></span>
            <span className="second">Following <KeyboardArrowDownIcon style={{transform:"translateY(7px)"}}/> </span>
            <span className="third">Popular <KeyboardArrowDownIcon style={{transform:"translateY(7px)"}}/></span>
            <span className="fourth">Post <KeyboardArrowDownIcon style={{transform:"translateY(7px)"}}/></span>
            <span className="fifth">Gender <KeyboardArrowDownIcon style={{transform:"translateY(7px)"}}/></span>
            <span className="sixth">Location <KeyboardArrowDownIcon style={{transform:"translateY(7px)"}}/></span>
            <span className="seventh">Profession <KeyboardArrowDownIcon style={{transform:"translateY(7px)"}}/></span>
          </div>

          <div>
            {result.map((photo)=>{
              return <img  src={photo.urls.small} alt="show"/>
            })}

          </div>

        </div>


      </div>
    </div>
  );
}

