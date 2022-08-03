<script>

import {useNavigate} from "svelte-navigator"

let navigate = useNavigate();

async function logout() {
    const info = await fetch("/api/logout");
    localStorage.removeItem("user")
    navigate("/login", { replace: true });
  }
</script>

<main>

<h2>userprofile page</h2>

<button class="logout-btn" on:click={logout}>Logout</button>

</main>