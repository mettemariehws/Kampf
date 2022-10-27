<script>
  import { toast } from "@zerodevx/svelte-toast";

  let newPlayer = {};
  const val = null; 

  async function clearFields() {
    document.getElementById("playerno").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "";
    document.getElementById("password").value = val;
  }

  async function addPlayer() {
    const res = await fetch("/api/add-player", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newPlayer),
    });

    if (res.status === 200) {
      clearFields();
      toast.push(
        "The player is now added and will recieve an email with information"
      );
      return;
    } else {
      console.log("error");
      toast.push("Something went worng - try again", {
        theme: {
          "--toastBackground": "#F56565",
          "--toastBarBackground": "#C53030",
        },
      });
    }
  }
</script>

<form id="addPlayer">
  <div class="container">
    <h1>Register a new player at the club</h1>
    <p>Please fill in this form to add a new player</p>
    <hr />

    <label for="playerno"><b>Player number</b></label>
    <input
      type="text"
      placeholder="Enter number"
      name="playerno"
      id="playerno"
      bind:value={newPlayer.no}
      required
    />

    <label for="name"><b>Name</b></label>
    <input
      type="text"
      placeholder="Enter name"
      name="name"
      id="name"
      bind:value={newPlayer.name}
      required
    />

    <label for="email"><b>Email</b></label>
    <input
      type="text"
      placeholder="Enter email"
      name="email"
      id="email"
      bind:value={newPlayer.email}
      required
    />

    <label for="role"><b>Role</b></label>
    <select name="role" id="role" bind:value={newPlayer.role}>
      <option value="player">Player</option>
      <option value="admin">Admin</option>
    </select>

    <label for="psw"><b>Password</b></label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      id="password"
      bind:value={newPlayer.password}
      required
    />
    <button
      type="submit"
      class="registerbtn"
      on:click|preventDefault={addPlayer}>Register</button
    >
  </div>
</form>

<style>
  * {
    box-sizing: border-box;
  }

  /* Add padding to containers */
  .container {
    padding: 16px;
  }

  /* Full-width input fields */
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    background-color: #ddd;
    outline: none;
  }

  select{
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }

  /* Overwrite default styles of hr */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }

  /* Set a style for the submit/register button */
  .registerbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  .registerbtn:hover {
    opacity: 1;
  }
</style>
