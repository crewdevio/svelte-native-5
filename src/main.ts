import { defineCustomElements } from "@ionic/pwa-elements/loader";
import App from "./App.svelte";
import { mount } from "svelte";

import "./app.pcss";

defineCustomElements(window);

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
