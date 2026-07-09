<script setup>
/**
 * @see https://www.tints.dev/palette/v1:Y2VydWxlYW58NDA0OEYwfDUwMHxwfDB8MHwwfDEwMHxtfmF6dXJlfDQwQTBGMHw1MDB8cHwwfDB8MHwxMDB8bX52aW9sZXR8OTA0MEYwfDUwMHxwfDB8MHwwfDEwMHxtfnNsYXRlfEYwRjJGNHwzMDB8cHwwfDB8MHwxMDB8bX5jYXJib258MjAyNDI4fDcwMHxwfDB8MHwwfDEwMHxt
 */

import Toggle from './inputs/Toggle.vue';
// import Checkbox from './inputs/Checkbox.vue';
</script>

<script>
import themeDefault from '@config/theme.json';
import themeNeon from '@config/theme-neon.json';
import { tokenBuilder } from 'dynamatic';

export default {
    data() {
        return {
            themeDefault: themeDefault,
            themeNeon: themeNeon,
            selectedTheme: "default",
        }
    },

    methods: {
        setSwitch() {
            const toggle = document.querySelector('#toggle-scheme');

            const watchPreferred = () => {
                if (!window.matchMedia) return;
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

                if (prefersDark.matches) {
                    toggle.checked = true;
                } else {
                    toggle.checked = false;
                };

                prefersDark.addEventListener('change', event => {
                    if (event.matches) {
                        toggle.checked = true;
                    } else {
                        toggle.checked = false;
                    };
                });
            }

            const setSwitch = (scheme) => {
                switch(scheme){
                    case 'dark':
                        toggle.checked = true;
                        break;
                    case 'light':
                        toggle.checked = false;
                        break;
                    case 'normal':
                        toggle.checked = false;
                        break;
                    default:
                        watchPreferred();
                        break;
                }
            }

            setSwitch(document.body.dataset.scheme);
        },

        toggleScheme() {
            const toggle = document.querySelector('#toggle-scheme');

            toggle.addEventListener('change', (event) => {
                this.pauseTransitions()

                if (event.currentTarget.checked) {
                    document.body.dataset.scheme = "dark";
                } else {
                    document.body.dataset.scheme = "light";
                }
            });
        },

        toggleBodyAttrValue( id, attr, value ) {
            const toggle = document.querySelector(`#${id}`);

            if (toggle === null) {
                return
            }

            if (document.body.getAttribute(attr) === null) {
                document.body.setAttribute(attr, "")
            }

            if (document.body.getAttribute(attr).includes(value)) {
                toggle.checked = true;
            }

            toggle.addEventListener('change', (event) => {
                const currentValues = document.body.getAttribute(attr);
                const hasValue = currentValues.includes(value);
                let newValues = currentValues.split(' ');

                if (event.currentTarget.checked) {
                    if (!hasValue) newValues.push(value);
                    console.log(`Add: ${attr} "${value}"`);
                } else {
                    if (hasValue) newValues = newValues.filter(item => item !== value);
                    console.log(`Remove: ${attr} "${value}"`);
                }

                document.body.setAttribute(attr, newValues.join(' '));
            })
        },

        setTheme(theme) {
            document.getElementById('theme').innerHTML = tokenBuilder(theme);
        },

        pauseTransitions() {
            document.body.setAttribute("instant-transitions", "")

            setTimeout(() => {
                document.body.removeAttribute("instant-transitions")
            }, 100)
        },

        changeTheme() {
            switch (this.selectedTheme) {
                case "neon":
                    this.setTheme(this.themeNeon)
                    break;
                break;
                    default:
                    this.setTheme(this.themeDefault)
                    break;
            }
        }
    },

    mounted() {
        this.setSwitch();
        this.toggleScheme();
        // this.toggleBodyAttrValue('toggle-identify-guidelines', 'identify', 'guidelines');
        // this.toggleBodyAttrValue('toggle-identify-components', 'identify', 'components');
    }
}
</script>

<template>
    <div id="settings" class="SettingsConsole" instant-transitions-exception>
        <label for="toggle-scheme" visually-hidden>
            Toggle Scheme (light / dark)
        </label>
        <Toggle
            id="toggle-scheme"
            name="Toggle Scheme"
            label="Toggle Scheme (light / dark)"
        />
        <label for="select-theme" visually-hidden>
            Select Theme
        </label>
        <div>
            <select
                id="select-theme"
                class="Field Field--small"
                name="Select Theme"
                v-model="selectedTheme"
                @change="changeTheme"
            >
                <option value="default">Default</option>
                <option value="neon">Neon</option>
            </select>
        </div>
        <!--
        <label for="toggle-identify-guidelines" visually-hidden>
            Toggle Guidelines
        </label>
        <Checkbox
            id="toggle-identify-guidelines"
            name="Toggle Guidelines"
            label="Toggle Guidelines"
        />
        <label for="toggle-identify-components" visually-hidden>
            Toggle Components
        </label>
        <Checkbox
            id="toggle-identify-components"
            name="Toggle Identify Components"
        />
        -->
    </div>
</template>

<style>
.SettingsConsole {
    position: fixed;
    top: unset;
    right: 0.5rem;
    bottom: 0.5rem;
    left: unset;
    display: flex;
    align-items: center;
    box-shadow: var(--shadow);
    border-radius: var(--round-sm);
    background-color: var(--theme-base);
    padding: 0.5em 0.5em 0.5em 1em;
    gap: 1em;
    font-size: 0.7rem;
}

[instant-transitions] {
    --input-timing: 0ms;
}
[instant-transitions] [instant-transitions-exception] {
    --input-timing: 300ms;
}
</style>
