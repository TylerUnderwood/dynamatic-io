<script setup>
import theme from '@config/theme.json';
import { tokenCategories, tokensNative, tokenBuilder } from 'dynamatic';
// components
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<template>
    <Banner title="Tokens"/>

    <Section heading="00 - Theme">
        <details class="mt-4">
            <summary><span class="Link">see more</span></summary>
            <code class="Codeblock text-xs">
<pre>
{{ theme }}
</pre>
            </code>
        </details>
    </Section>

    <Section heading="01 - Token Categories">
        <details class="mt-4">
            <summary><span class="Link">see more</span></summary>
            <code class="Codeblock text-xs">
<pre>
{{ tokenCategories(theme) }}
</pre>
            </code>
        </details>
    </Section>

    <Section heading="02 - Tokens Native">
        <details class="mt-4">
            <summary><span class="Link">see more</span></summary>
            <code class="Codeblock text-xs">
<pre>
{{  tokensNative(theme) }}
</pre>
            </code>
        </details>
    </Section>

    <Section heading="03 - Token Builder">
        <details class="mt-4" open>
            <summary><span class="Link">see more</span></summary>
            <code class="Codeblock text-xs">
<pre>
{{ tokenBuilder(theme) }}
</pre>
            </code>
        </details>
    </Section>
</template>
