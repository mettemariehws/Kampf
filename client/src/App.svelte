<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Login from "./pages/login/login.svelte";
  import Addplayer from "./pages/addplayers/addplayer.svelte";
  import Userprofile from "./pages/userprofile/userprofile.svelte";
  import Gameoverview from "./pages/gameoverview/gameoverview.svelte";
  import { user } from "./store/writableStore";
  import PrivateRoute from "../src/pages/privaterouting/privateRouting.svelte";

  import RouteComponent from "./pages/login/login.svelte";

  async function logout() {
    const res = await fetch("/api/logout");
    navigate("/", { replace: true });
    $user = null;
  }
</script>

<main>
  <Router primary={false}>
    <div id="header">
      <div>
        <div class="logo">
          <img src="img/logo.png" alt="Avatar" class="avatar" />
        </div>
        <ul>
          <li class="current">
            <Link to="/frontpage">Game Overview</Link>
          </li>
          <li>
            <Link to="/userprofile">Profile</Link>
          </li>
          <li>
            <Link to="/frontpage">Add player</Link>
          </li>
          <li>
            <!--<a class="services" href="services.html">Logout</a>-->
            <button type="logout-button" on:click={() => logout()} />
          </li>
        </ul>
      </div>
    </div>

    <Route path="/" component={Gameoverview} />
    <Route path="/login" component={Login}> 
      
      <RouteComponent/> 
    </Route> />
    <Route path="/add-player" component={Addplayer} />

    <PrivateRoute path="/userprofile">
      <Userprofile />
    </PrivateRoute>
  </Router>
</main>

<style>
  main {
    background: #a5352d;
    color: #ffffff;
    font-family: "QuestrialRegular";
    font-size: 16px;
    margin: 0;
    min-width: 940px;
    padding: 0;
  }
  @font-face {
    font-family: "QuestrialRegular";
    src: url("../fonts/questrial-regular-webfont.eot");
    src: url("../fonts/questrial-regular-webfont.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/questrial-regular-webfont.woff") format("woff"),
      url("../fonts/questrial-regular-webfont.ttf") format("truetype"),
      url("../fonts/questrial-regular-webfont.svg#QuestrialRegular")
        format("svg");
    font-weight: normal;
    font-style: normal;
  }
  img {
    border: 0;
  }
  #header {
    background: url(../images/bg-gray.png) repeat-x left top;
    height: 360px;
    position: relative;
    width: 100%;
    z-index: 2;
  }
  #header div {
    margin: 0 auto;
    width: 940px;
  }
  #header div div.logo {
    background: url(../images/dogs.jpg) no-repeat center top;
    display: block;
    height: 306px;
    text-indent: -99999px;
  }

  img.avatar {
    text-align: center;
    margin: 24px 0 12px 0;
    width: 100%;
    border-radius: 65%;
  }

  #header div ul {
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }
  #header div ul li {
    float: left;
    margin: 0 0 0 0;
    position: relative;
    width: 235px;
  }
</style>
