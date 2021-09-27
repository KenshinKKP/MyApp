import logo from './RK_02.jfif';
import logo2 from './Coding Image.jpg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Post(props) {
  return <div><h1>{props.Title}</h1>
  <p>{props.Synopsis}</p>
  <p>{props.Versions}</p>
  </div>
}
const Kenshin = <Post
Title="Rurouni Kenshin"
Synopsis="In Japan, during the 1800's, there was a samurai that was known as a Battusai (a Manslayer) that was feared by many. He was recognised by the cross scar on his left cheek."
Versions="In total there has been 96 Episodes, 3 OVA's and 5 Live action films over the past 30 years"  />;


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div><h2>Home</h2>
  Namaste! My name is Kajal. I warmly welcome you to my page.<br/>
  <br/>
  A quick and brief introduction of myself:<br/>
  <br/>
  Professional life:<br/>
  <br/>
  * Have been working for the past 16 years.<br/>
  * Jos Scope so far include Customer Service, Events Management, Emcee-ing and Sales & Marketing.<br/>
  * Currently working for the Singapore Mediation Centre in the Business Development team.<br/>
  * Latest feather to add to that work hat - Coding and Programming. Gotta thank Covid for this opportunity - for which I would have not known I had a knack for it!<br/>
  <br/>
  <br/>
  Personal life:<br/>
  * I love dancing - have done Indian Classical Dance, Jazz, Salsa and those crazy dances you do with friends :)<br/>
  * Currently hooked on K-dramas and listening to K-Pop (aren't most of us today?)<br/>
  * I love to read all those murder-mystery books and having my imagination run wild! I just got my hands on a Kindle but the feeling of a page turner with an actual book is... uuuuf!<br/>
  * I am now trying my hands at coding (and am totally clueless at it... hahahaahha but loving it at the same time).<br/>
    <br/>
  <p>If you would like to know more on Mediation, or on a lighter note, gush about Kenshin, feel free to drop me a message on any of the following platforms:</p>

<ul>
  <li><a href="https://www.facebook.com/kajal.k.parikh">facebook</a></li>
  <li><a href="coolkaj@gmail.com">Email</a></li>
  <li><a href="https://www.linkedin.com/in/kajal-parikh-a65855126">LinkedIn</a></li>
</ul>
  <img src={logo2} alt="STRESS"/><br/></div>
}

function About() {
  return <div><h2>About Kenshin Himura</h2>
  <img src={logo} alt="kenshin" /><br/>
  <br/>
    Allow me to introduce Kenshin Himura to you:<br/>
    <br/>
    {Kenshin}
    <br/>
    <h2>Why I am totally floored by him?</h2><br/>
    This is the one anime I have been totally in love with when I first watched it back in 1993.<br/>
  <br/>
    I vividly remember - it was 5pm, my younger brother and I were flipping the tv channels (and cable was just introduced in Singapore - FINALLY!).<br/>
  <br/>
    We came to the AXN channel and poof! saw this fella with a cross on his cheek swinging his Sakabato (His reverse-blade sword) in a cool and menancing way!<br/>
  <br/>
    And that, instantly got us hooked onto the crazy world of Kenshin and Anime!<br/>
  <br/>
    </div>
}

function Users() {
  return <h2>Users</h2>;
}