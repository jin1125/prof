<script lang="ts">
    import { page } from '$app/stores';
    import "../app.css";

    $: currentPath = $page.url.pathname;
</script>

<header class="py-8 text-center sm:text-right">
    <nav class="leading-10 space-x-6 sm:space-x-12">
        <a
            class="
                pt-1
                {
                    currentPath === '/about'
                    ? 'border-t-2 border-main-blue'
                    : ''
                }
            "
            href="/about"
        >
            <span class="hover:opacity-50">
                About
            </span>
        </a>
        <a
        class="
            pt-1
            {
                currentPath === '/career'
                ? 'border-t-2 border-main-blue'
                : ''
            }
        "
            href="/career"
        >
            <span class="hover:opacity-50">
                Career
            </span>
        </a>
        <a
        class="
            pt-1
            {
                currentPath === '/work'
                ? 'border-t-2 border-main-blue'
                : ''
            }
        "
            href="/work"
        >
            <span class="hover:opacity-50">
                Work
            </span>
        </a>
        <a
            class="hover:opacity-50"
            href="https://zenn.dev/jin1125"
            target="_blank"
        >
            Article
        </a>
        <a
            class="hover:opacity-50"
            href="https://github.com/jin1125"
            target="_blank"
        >
            GitHub
        </a>
    </nav>
</header>

<main>
    <slot />
</main>
