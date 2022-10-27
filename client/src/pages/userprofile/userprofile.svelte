<script>
  import { useNavigate } from "svelte-navigator";
  import { onMount } from "svelte";
  import { io } from "socket.io-client";
  import { toast } from "@zerodevx/svelte-toast";

  $: allGames = [];
  let navigate = useNavigate();
  let updatedPlayer = {};
  let loggedInUser = {};


  const socket = io("http://localhost:3000");

  onMount(async () => {
    allGames = await getGames();
    loggedInUser = JSON.parse(localStorage.getItem("user"));
    fillInformation();
    socket.connect();
    //socket.emit("connection", {message:"tester"})
    
  });

  async function fillInformation(){
    document.getElementById("playerno").value = loggedInUser.no;
    document.getElementById("name").value = loggedInUser.name;
    document.getElementById("email").value = loggedInUser.email;
  };

  async function getGames() {
    const info = await fetch("/api/all-games");
    return info.json();
  }

  async function updatePlayer(){
    const info = await fetch("/api/update-player", {
      headers: {
        "content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ id: loggedInUser.id, no: updatedPlayer.no, name: updatedPlayer.name, email: updatedPlayer.email}),
    });

    if (info.status === 200) {
      toast.push(
        "Your new information is now saved!"
      );
      return;
    } else {
      console.log("error");
      toast.push("Something went wrong - try again", {
        theme: {
          "--toastBackground": "#F56565",
          "--toastBarBackground": "#C53030",
        },
      });
    }
  }

  async function updateAttendees(gameId) {
    const info = await fetch("/api/update-attendee", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ gameId: gameId, userId: loggedInUser.id}),
    })

    if(info.ok){
      socket.emit("change", {data:"random"});
    }else{
      console.log("Not ok")
    }
  };

  //det er fint med to funktioner fordi den ene er en post og den anden er en delete bam!!!
  async function deleteAttendees(gameId){
      const info = await fetch("/api/delete-attendee", {
        headers: {
        "content-type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ gameId: gameId, userId: loggedInUser.id}),
      })

      if(info.ok){
      socket.emit("change", {data:"random"});
    }else{
      console.log("Not ok")
    }
  };

  socket.on("update", async (data) => {
    allGames = await getGames();
  });

  async function logout() {
    const info = await fetch("/api/logout");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  }
</script>

<form class="login-form" method="post">
  <div class="imgcontainer">
    <img src="img/user.png" alt="Avatar" class="avatar" />
    <h2 class="welcometext">Welcome to your player profile!</h2>
  </div>

  <div class="container">
    <label for="playerno"><b>Player number</b></label>
    <input type="text" placeholder="Player no" name="playerno" id="playerno" bind:value={updatedPlayer.no} required />

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Name" name="name" id="name" bind:value={updatedPlayer.name} required/>

    <label for="Email"><b>Email</b></label>
    <input type="text" placeholder="Email" name="email" id="email" bind:value={updatedPlayer.email} required/>

    <button type="updatePlayer" class="editbtn" on:click|preventDefault={updatePlayer}
      >Save changes</button>

    <button type="logoutbtn" class="logoutbtn" on:click|preventDefault={logout}>Log out</button>
  </div>
</form>

<h3>Here is the games you can choose to attend</h3>
<div class="game-container">
  <table class="game-table" id="section">
    <thead>
      <tr>
        <th>Opponent</th>
        <th>Place</th>
        <th>Start time</th>
        <th>Date</th>
        <th>Attendees</th>
      </tr>
    </thead>
    <tbody>
      {#each allGames as game}
        <tr>
          <td>{game.opponent}</td>
          <td>{game.place}</td>
          <td>{game.time}</td>
          <td>{game.date}</td>
          <td>{game.users.length}</td>
          <td>
            <div class="button-container">
              {#if !game.users.find(player => player.userId === loggedInUser.id)}
              <button
                class="readybtn"
                on:click={updateAttendees(game.id)}
              >
                Playable</button
              >
              {:else}
              <button
                class="unreadybtn"
                on:click={deleteAttendees(game.id)}
              >
                Unplayable</button
              >
              {/if}
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<div id="footer">
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="about.html">About</a>
    </li>
    <li>
      <a href="blog.html">Blog</a>
    </li>
    <li>
      <a href="services.html">Services</a>
    </li>
  </ul>
  <p>
    &copy; Copyright &copy; 2023. Mette Marie the developer all rights reserved
  </p>
  <div id="connect">
    <a
      href="http://freewebsitetemplates.com/go/facebook/"
      target="_blank"
      id="facebook">Facebook</a
    >
    <a
      href="http://freewebsitetemplates.com/go/twitter/"
      target="_blank"
      id="twitter">Twitter</a
    >
    <a
      href="http://freewebsitetemplates.com/go/googleplus/"
      target="_blank"
      id="googleplus">Google&#43;</a
    >
  </div>
</div>

<style>
  form {
    border: 3px solid #f1f1f1;
  }

  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }

  img.avatar {
    width: 10%;
    border-radius: 65%;
  }

  .container {
    padding: 16px;
  }

  button:hover {
    opacity: 0.8;
  }

  * {
    box-sizing: border-box;
  }

  /* Add padding to containers */
  .container {
    padding: 16px;
  }

  /* Full-width input fields */
  input[type="text"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }

  input[type="text"]:focus {
    background-color: #ddd;
    outline: none;
  }

  .editbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  .editbtn:hover {
    opacity: 1;
  }

  .logoutbtn {
    background-color: #d41919;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  .logoutbtn:hover {
    opacity: 0.8;
  }

  .game-container {
    width: 100%;
    height: 100%;
  }

  .game-table {
    width: 100%;
    height: 100%;
  }

  td {
    padding: 12px 24px;
  }

  h3 {
    text-align: center;
  }

  .readybtn{
    background-color: green;
    color: white;
  }

  .unreadybtn{
    background-color: red;
    color: white;
  }

  #footer {
    margin: 0 auto;
    min-height: 85px;
    overflow: hidden;
    width: 940px;
  }
  #footer div.logo a img {
    display: block;
  }
  #footer ul {
    float: left;
    list-style: none;
    margin: 3px 0 0;
    overflow: hidden;
    padding: 33px 0 0;
    width: 220px;
  }
  #footer ul li {
    border-left: 1px solid #85603a;
    float: left;
    height: 10px;
  }
  #footer ul li:first-child {
    border: 0;
  }
  #footer ul li a {
    color: white;
    display: block;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    font-size: 10px;
    line-height: 9px;
    padding: 0 5px;
    text-align: center;
    text-decoration: none;
  }
  #footer p {
    color: white;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    font-size: 10px;
    float: left;
    line-height: 16px;
    margin: 0;
    padding: 33px 0 0;
    width: 280px;
  }
  #footer div#connect {
    float: right;
    overflow: hidden;
    padding: 24px 0 0;
    width: auto;
  }
  #footer div#connect a {
    display: block;
    float: left;
    height: 25px;
    margin: 0 0 0 45px;
    text-indent: -99999px;
  }
  #footer div#connect a#facebook {
    background: url(../images/icons.png) no-repeat 0 0;
    margin: 0;
    width: 25px;
  }
  #footer div#connect a#twitter {
    background: url(../images/icons.png) no-repeat 0 -35px;
    width: 36px;
  }
  #footer div#connect a#googleplus {
    background: url(../images/icons.png) no-repeat 0 -95px;
    width: 25px;
  }
  #footer div#connect a#facebook:hover {
    background: url(../images/icons.png) no-repeat -25px 0;
  }
  #footer div#connect a#twitter:hover {
    background: url(../images/icons.png) no-repeat 0 -60px;
  }
  #footer div#connect a#googleplus:hover {
    background: url(../images/icons.png) no-repeat -25px -95px;
  }

  .button-container {
    display: flex;
    gap: 8px;
  }
</style>
