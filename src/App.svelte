<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { ModeWatcher } from "mode-watcher";
  import View from "@/views/View.svelte";
  import Home from "@/views/Home.svelte";
  import { App } from "konsta/svelte";

  let theme: "material" | "ios" = $state("ios");
</script>

<ModeWatcher track />

<Router>
  <App {theme} safeAreas>
    <Route path="/">
      <Home {theme} onThemeChange={(detail) => (theme = detail)} />
    </Route>

    <Route path="/view">
      <View />
    </Route>
  </App>
</Router>
