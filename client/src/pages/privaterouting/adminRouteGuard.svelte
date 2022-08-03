<script>
   let user = localStorage.getItem("user");

  </script>
  
  {#if user.role === "admin"}
    <slot />
  {/if}