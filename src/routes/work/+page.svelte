<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Work - Jin's Profile</title>
  <meta name="description" content="Jin's ProfileのWorkページです。" />
</svelte:head>

<div class="sm:my-20">
  {#if data.work && data.work.length > 0}
    {#each data.work as app}
      <a
        class="block border hover:opacity-50 mb-10 p-8 shadow-md space-y-6"
        href={app.url}
        target="_blank"
      >
        <h2 class="font-bold text-2xl">
          {app.title}
        </h2>
        <p>
          {app.pglang}
        </p>
      </a>
    {/each}
  {:else}
    <p>No data available</p>
  {/if}
</div>
