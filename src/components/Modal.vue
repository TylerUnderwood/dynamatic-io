<script>
import Modal from "@scripts/modal";

export default {
    props: [
        'id',
        'duration'
    ],

    mounted() {
        new Modal( this.id ).init();
    }
}
</script>

<template>
    <dialog
        :id="id"
        class="Modal"
        modal
        data-duration="300"
    >
        <button
            class="Modal__backdrop"
            :modal-toggle="id"
        ></button>
        <div class="Modal__container">
            <button
                class="Modal__close"
                :modal-toggle="id"
            ></button>

            <slot/>

        </div>
    </dialog>
</template>
