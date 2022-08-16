<script>
  import { useNavigate } from "svelte-navigator";
  const navigate = useNavigate();

  let user = {};

  async function login(){
    const info = await fetch("/api/login", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({user})
    });

    const responsemessage = await info.json();

    if(info.ok ){
      localStorage.setItem("user", JSON.stringify(responsemessage));
        if(responsemessage.loginUser.role === "admin"){
          navigate("/admin", {replace : true});
          return
        }else
        navigate("/userprofile", {replace : true });
        return 
    }else{
      console.log("Det er ikke de rigtige credentials");
    }};

  async function cancel(){
      navigate("/", {replace : true });
  };

</script>

<form class="login-form" method="post">
    <div class="imgcontainer">
      <img src="img/logo.png" alt="Avatar" class="avatar">
      <h2 class="welcometext">Welcome! Log into your game overview on Kampf below</h2>
    </div>
  
    <div class="container">
      <label for="uname"><b>Playerno</b></label>
      <input type="text" placeholder="Enter Playerno" name="uname" required bind:value={user.no}>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required bind:value={user.password}>

      <button class="loginbtn" on:click|preventDefault={login}>Login</button>
      <button class="cancelbtn" on:click={cancel}>Cancel</button>
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
  color: #a5352d;
  font-family: sans-serif;
}

.loginbtn {
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
  background-color: #d41919;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
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