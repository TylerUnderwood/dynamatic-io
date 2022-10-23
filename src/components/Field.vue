<script>
export default {
    props: {
        id: {
            type: String,
            default(rawProps) {
                return 'input-' + rawProps.name.trim().toLowerCase().split(' ').join('-');
            },
        },
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
            required: true,
        },
        placeholder: String,
        label: String,
        value: [String, Number],
        min: Number,
        max: Number,
        required: Boolean,
        readonly: Boolean,
        disabled: Boolean,
    },
    computed: {
        hasLabel() {
            return this.label != null;
        },
        getLabel() {
            return this.hasLabel && this.label === '' ? this.name : this.label;
        },
        hasPlaceholder() {
            return this.placeholder != null;
        },
        getPlaceholder() {
            return this.hasPlaceholder && this.placeholder === '' ? this.type : this.placeholder;
        },
    },
    data() {
        return {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
            inputStringTypes: ['text', 'url', 'tel', 'email', 'password'],
            inputNumberTypes: ['number', 'time', 'week', 'month', 'date', 'datetime-local'],
        }
    },
}
</script>

<template>
    <div class="flex flex-col">
        <label class="label mb-2" :for="id" v-if="hasLabel">
            {{ getLabel }}
        </label>
        <input
            :id="id"
            class="Field"
            :type="type"
            :name="name"
            :placeholder="getPlaceholder"
            :value="value"
            :min="inputNumberTypes.includes(type) ? min : null"
            :max="inputNumberTypes.includes(type) ? max : null"
            :minlength="inputStringTypes.includes(type) ? min : null"
            :maxlength="inputStringTypes.includes(type) ? max : null"
            :required="required != false"
            :readonly="readonly != false"
            :disabled="disabled != false"
        />
    </div>
</template>
