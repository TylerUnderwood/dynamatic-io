<script>
export default {
  props: [
    'title',
  ],
  methods: {
    toggleTheme() {
      const toggle = document.querySelector('#toggle-theme');

      if (document.body.dataset.theme === "dark") {
        toggle.checked = true;
      }

      toggle.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
          document.body.dataset.theme = "dark";
        } else {
          document.body.dataset.theme = "light";
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
    this.toggleTheme();
    this.toggleBodyAttrValue('toggle-identify-guidelines', 'identify', 'guidelines');
    this.toggleBodyAttrValue('toggle-identify-components', 'identify', 'components');
  }
}
</script>

<template>
  <div id="settings" class="settings-tab p-1 bg-offset border-contrast">
    <input type="checkbox" name="Toggle Theme" id="toggle-theme"/>
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
    border-width: 2px;
    border-style: solid;
}
</style>
