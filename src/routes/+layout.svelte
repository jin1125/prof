<script lang="ts">
  import Header from "$lib/Header.svelte";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import "../app.css";

  injectSpeedInsights();
</script>

<Header />

<main class="sm:mx-20">
  <slot />
</main>
