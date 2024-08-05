<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>About - Jin's Profile</title>
</svelte:head>

<div class="flex flex-col items-center sm:mt-24 space-y-16">
  {#if data.about && data.about.length > 0}
    <img
      class="rounded-full w-72"
      src={data.about[0]?.image?.src}
      alt="プロフィール画像"
    />
    <div class="space-y-6">
      <p>
        居住地 / {data.about[0]?.address}
      </p>
      <p>
        生年 / {data.about[0]?.birth}
      </p>
      <p>
        趣味 / {data.about[0]?.hobby}
      </p>
    </div>
  {:else}
    <p>No data available</p>
  {/if}
</div>
