
<script>
export default {
  props: [
    'id',
    'name',
    'value'
  ]
}
</script>

<template>
    <label className="toggle" :for="id">
        <input
            className="toggle__input input--override"
            type="checkbox"
            :id="id"
            :name="name"
            :checked="value"
        />

        <div className="toggle__switch"></div>


        <div className="label" v-if="labelOn && labelOff">
            <span className="toggle__value">{{ labelOn }}</span>
            <span className="toggle__value">{{ labelOff }}</span>
        </div>
    </label>
</template>
