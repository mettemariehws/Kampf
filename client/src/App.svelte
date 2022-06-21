<script>
	import {Router, Route} from "svelte-navigator";
	import Login from "./pages/login/login.svelte";
	import TrainerPage from "./pages/trainerfrontpage/admin.svelte"
</script>

<main>
	<Router>
		<Route path="/" component={TrainerPage} />
		<Route path="/trainerpage" component={Login} />
	</Router>
</main>