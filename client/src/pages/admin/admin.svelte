<script>
  import { onMount } from "svelte";

    $: allPlayers = [];

    onMount(async () =>{
        allPlayers = getAllPlayers();
    });

    async function getAllPlayers(){
        const res = await fetch("/api/get-all-players")
        return res.json();
    };

</script>

<h3>Here are an overview of all the </h3>
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
                on:click={deletePlayer}
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