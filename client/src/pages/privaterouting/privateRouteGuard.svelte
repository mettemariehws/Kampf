<script>
    import { useNavigate, useLocation } from "svelte-navigator";

    let user = localStorage.getItem("user");
    const navigate = useNavigate();
    const location = useLocation();
  
      if (!user) {
      navigate("/login", {
        state: { from: $location.pathname },
        replace: true,
      });
    }

  </script>
  
  {#if user}
    <slot />
  {/if}