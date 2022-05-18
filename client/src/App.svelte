<script>
	import {Router, Route} from "svelte-navigator";
	import Login from "./pages/login/login.svelte";
	import Header from "./components/header/header.svelte";
</script>

<main>
	<Header/>

	<Router>
		<Route path="/login" component={Login}/>
	</Router>
</main>

<style>
	
</style>