<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";

// https://en.wikipedia.org/wiki/Box-drawing_character
</script>

<template>
    <Banner title="Taxonomy"/>

    <Section heading="Folder Structure">
        <br class="break" style="font-size: 2.4rem">
        <code class="Codeblock">
<pre>
┃ /styles
┃
┣━┓ /theme
┃ ┃
┃ ┣━ scheme.css
┃ ┣━ typography.css
┃ ┣━ input.css
┃ ┗━ layout.css
┃
┣━┓ /core
┃ ┃
┃ ┣━┓ /template
┃ ┃ ┃
┃ ┃ ┣━ root.css
┃ ┃ ┣━ page.css
┃ ┃ ┣━ fieldset.css
┃ ┃ ╟╌ table.css *
┃ ┃ ╟╌ dialog.css ?
┃ ┃ ╙╌ summary.css ?
┃ ┃
┃ ┣━┓ /typography
┃ ┃ ┃
┃ ┃ ┣━ copy.css
┃ ┃ ┣━ heading.css
┃ ┃ ┣━ list.css
┃ ┃ ┣━ quote.css
┃ ┃ ┣━ code.css
┃ ┃ ┗━ markup.css
┃ ┃
┃ ┣━┓ /inputs
┃ ┃ ┃
┃ ┃ ┣━ link.css
┃ ┃ ┣━ button.css
┃ ┃ ┣━ field.css
┃ ┃ ╟╌ select.css *
┃ ┃ ╟╌ checkbox.css *
┃ ┃ ╟╌ radio.css *
┃ ┃ ╙╌ range.css *
┃ ┃
┃ ┗━┓ /media
┃   ┃
┃   ┣━ video.css
┃   ┣━ image.css
┃   ┣━ figure.css
┃   ┣━ icon.css
┃   ╙╌ background.css *
┃
┣━┓ /components
┃ ┃
┃ ┣━ section.css
┃ ┣━ markup.css
┃ ╟╌ shapes.css ?
┃ ╟╌ modal.css *
┃ ╟╌ accordion.css *
┃ ╙╌ slider.css *
┃
┣━┓ /tools
┃ ┃
┃ ┣━ layout.css
┃ ┣━ matrix.css
┃ ╟╌ animations.css *
┃ ╙╌ gradient.css *
┃
┗━┓ /utilities
  ┃
  ┗━ @tailwind
</pre>
        </code>
    </Section>
</template>

<style>
</style>
