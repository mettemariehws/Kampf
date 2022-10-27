<script>
  import { onMount } from "svelte";
  import { io } from "socket.io-client"

    $: allPlayers = [];

    const socket = io("http://localhost:3000");

    onMount(async () =>{
        allPlayers = await getAllPlayers();
        socket.connect();
    });

    async function getAllPlayers(){
        const res = await fetch("/api/get-all-players")
        return res.json();
    };

    async function deletePlayer(playerId){
        const info = await fetch("/api/delete-player", {
        headers: {
        "content-type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({id: playerId})
    })

    if(info.ok){
      socket.emit("change", {data:"random"});
    }else{
      console.log("Not ok")
    }
};

    async function playerOverview(){
        console.log("her skal den redirecte")
    }

</script>

<div class="container">
<h3>Here are an overview of all the players recorded</h3>
<hr />
<div class="game-container">
  <table class="game-table" id="section">
    <thead>
      <tr>
        <th>Player no</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {#each allPlayers as player}
        <tr>
          <td>{player.no}</td>
          <td>{player.name}</td>
          <td>{player.email}</td>
          <td>
            <div class="button-container">
              <button
                class="readybtn"
                on:click={deletePlayer(player.id)}
              >
                Delete</button
              >
              <button
                class="unreadybtn"
                on:click={playerOverview}
              >
                See attended games</button
              >
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
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

  .readybtn{
    color: pink;
  }

  .unreadybtn{
    color: pink;
  }

  #footer {
    margin: 0 auto;
    min-height: 85px;
    overflow: hidden;
    width: 940px;
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