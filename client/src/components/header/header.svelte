<script>
    import { Router, Link } from "svelte-Navigator";
  
  </script>
  
  <Router>
    <nav class="navbar">
      <div class="logo-container">
        <p class="logo">KAMPF</p>
      </div>
      <Link to="/vedikkeendnu">Tilføj spiller</Link>
      <Link to="/vedhellerikkeendnu">LOG UD</Link>
    </nav>
  </Router>
  
  <style>
    .navbar {
      /* make it stick */
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      /* in front of all other elements */
      z-index: 99;
      /* set background */
      background-color: red;
      padding: 10px 5%;
      /* define flex */
      display: flex;
      justify-content: space-between;
      align-items: center;
     
    }
    .nav-menu {
      word-spacing: 20px;
      color: black;
    }
    .menu-item {
      display: inline-block;
      font-style: "Montserrat";
      font-weight: bolder;
      font-size: 30px;
    }
    .menu-item1 {
      display: inline-block;
      font-style: "Playfair Display";
      font-weight: bold;
    }
  </style>
  