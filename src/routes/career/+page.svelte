<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Career - Jin's Profile</title>
  <meta name="description" content="Jin's ProfileのCareerページです。" />
</svelte:head>

<div class="sm:my-20 text-center">
  {#if data.about && data.about.length > 0}
    <div class="space-y-16 inline-block text-left">
      <div>
        <h2 class="font-bold mb-6 text-2xl">Summary</h2>
        <p class="leading-10">
          {@html data.career[0]?.summary}
        </p>
      </div>

      <div>
        <h2 class="font-bold mb-6 text-2xl">Detail</h2>
        <p class="leading-10">
          {@html data.career[0]?.detail}
        </p>
      </div>
    </div>
  {:else}
    <p>No data available</p>
  {/if}
</div>
