<script>
export default {
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
                if (event.currentTarget.checked) {
                    document.body.dataset.scheme = "dark";
                } else {
                    document.body.dataset.scheme = "light";
                }
            });
        },

        toggleBodyAttrValue( id, attr, value ) {
            const toggle = document.querySelector(`#${id}`);

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
        }
    },

    mounted() {
        this.setSwitch();
        this.toggleScheme();
        this.toggleBodyAttrValue('toggle-identify-guidelines', 'identify', 'guidelines');
        // this.toggleBodyAttrValue('toggle-identify-components', 'identify', 'components');
    }
}
</script>

<template>
    <div id="settings" class="SettingsConsole">
        <!--
        <label for="select-theme">
            <select
                id="select-theme"
                name="Select Theme"
            >
                <option value="auto">Auto</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </label>
        -->
        <input
            type="checkbox"
            id="toggle-scheme"
            name="Toggle Scheme"
        />
        <input
            type="checkbox"
            id="toggle-identify-guidelines"
            name="Toggle Guidelines"
        />
        <!--
        <input
            type="checkbox"
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
    right: 0;
    bottom: 0;
    left: unset;
    display: flex;
    border-width: 2px;
    border-bottom-width: 0;
    border-radius: 3px;
    background-color: var(--theme-offset);
    padding: 0.5em;
    gap: 0.5em;
    font-size: 0.7rem;
}
</style>
