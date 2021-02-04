<!-- src/App.svelte -->
<script>
  import { Router } from "@roxi/routify";
  import { routes } from "./.routify/routes";
  const config = {
    useHash: true
  }
</script>

<Router {routes} {config}/> 
