<template>
    <section
        id="banner"
        class="banner p-6"
        role="banner"
        style="background-color: var(--theme-secondary)"
        data-theme="dark"
    >
        <div class="wrapper">
            <h1 class="Heading Title">
                <slot/>
            </h1>
        </div>
    </section>
</template>
