<script>

  import {Router, Link, navigate} from "svelte-navigator";

  let user = {};
  let errormessage = "";

  async function login(){
    const info = await fetch(`/api/login`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });
    if(info.status === 200){
      console.log("wuhu, det er perfekt");
      navigate("/trainerpage")
    }else{
      console.log("det er ikke de rigtige credentials");
    }
  }

</script>
<form action="action_page.php" method="post">
    <div class="imgcontainer">
      <img src="logo.png" alt="Avatar" class="avatar">
      <h2 class="welcometext">Welcome! Log into your game overview on Kampf below</h2>
    </div>
  
    <div class="container">
      <label for="uname"><b>Playerno</b></label>
      <input type="text" placeholder="Enter Playerno" name="uname" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
  
      <button type="login" on:click={login()}>Login</button>
      <span class=cancelbtn> <a href="/">Cancel</a></span>
      <label>
        <input type="checkbox" checked="checked" name="remember" class="rememberme"> Remember me
      </label>
    </div>
  </form>
  <style>

form {
  border: 3px solid #f1f1f1;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  
}

.welcometext {
  color: #f44336;
  font-family: papyrus;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  background-color: #f44336;
  width: auto;
  padding: 10px 18px;
  appearance: button;
}

.cancelbtn:hover{
    opacity: 0.8;
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

  </style>