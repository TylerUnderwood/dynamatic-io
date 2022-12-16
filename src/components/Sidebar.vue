<script>
export default {
  props: [
    'id',
  ],
}
</script>

<template>
    <div class="Sidebar__track">
        <div class="Sidebar__tram">
            <div class="Sidebar__container">

                <slot/>

            </div>
        </div>
    </div>
</template>

<style>
    .Sidebar__track {
        position: relative;
        flex: 1 0 auto;
        width: 100%;
        /* box-shadow: 0px 10px 10px -10px rgba(0,0,0,0.2); */
    }
    .Sidebar__tram {
        position: sticky;
        top: 0;
        max-height: 100vh;
    }
    .Sidebar__tram::before,
    .Sidebar__tram::after {
        position: absolute;
        z-index: 1;
        right: -1em;
        left: -1em;
        padding-top: 1em;
        content: '';
    }
    .Sidebar__tram::before {
        top: 0;
        bottom: unset;
        background: linear-gradient(0deg, rgb(0 0 0 / 0) 0%, var(--theme-base) 100%);
    }
    .Sidebar__tram::after {
        top: unset;
        bottom: 0;
        background: linear-gradient(0deg, var(--theme-base) 0%, rgb(0 0 0 / 0) 100%);
    }
    .Sidebar__container {
        position: relative;
        z-index: 0;
        max-height: 100vh;
        overflow-y: scroll;
        overflow-x: visible;
        margin: -1em;
        padding: 1em;
    }
</style>
