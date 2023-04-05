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
    this.toggleBodyAttrValue('toggle-identify-components', 'identify', 'components');
  }
}
</script>

<template>
  <div id="settings" class="settings-tab p-1 bg-offset border-contrast">
    <input type="checkbox" name="Toggle Scheme" id="toggle-scheme"/>
    <div class="pt-2"></div>
    <input type="checkbox" name="Toggle Guidelines" id="toggle-identify-guidelines"/>
    <div class="pt-2"></div>
    <input type="checkbox" name="Toggle Identify Components" id="toggle-identify-components"/>
  </div>
</template>

<style>
.settings-tab {
    position: fixed;
    top: 50%;
    right: unset;
    bottom: unset;
    left: 100%;
    translate: -100% -50%;
    display: flex;
    flex-direction: column;
    border-width: 2px;
    border-style: solid;
    border-right-width: 0;
    border-radius: 3px;
}
</style>
