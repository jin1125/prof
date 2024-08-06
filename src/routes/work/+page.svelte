<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Work - Jin's Profile</title>
</svelte:head>

<div class="sm:my-20">
  {#if data.work && data.work.length > 0}
    {#each data.work as app}
      <div class="border mb-10 p-8 shadow-md space-y-6">
        <h2 class="font-bold hover:opacity-50 text-2xl">
          {@html app.title}
        </h2>
        <p>
          {app.pglang}
        </p>
      </div>
    {/each}
  {:else}
    <p>No data available</p>
  {/if}
</div>
