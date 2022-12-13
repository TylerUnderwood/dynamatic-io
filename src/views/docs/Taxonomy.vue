<script setup>
import SectionDocs from "@/components/SectionDocs.vue";

// https://en.wikipedia.org/wiki/Box-drawing_character
</script>

<template>
    <SectionDocs heading="Folder Structure">
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
┃ ┣━ SectionDocs.css
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
    </SectionDocs>
</template>

<style>
</style>
