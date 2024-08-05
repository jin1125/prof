<script lang="ts">
  import Header from "$lib/Header.svelte";
  import "../app.css";
</script>

<Header />

<main class="sm:mx-20">
  <slot />
</main>
