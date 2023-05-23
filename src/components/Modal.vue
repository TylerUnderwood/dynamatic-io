<script>
import Modal from "@scripts/modal";

export default {
    props: [
        'id',
        'duration'
    ],

    mounted() {
        window.Modal = Modal;

        new Modal( this.id ).init();
    }
}
</script>

<template>
    <dialog
        :id="id"
        class="Modal"
        modal
    >
        <div
            class="Modal__backdrop"
            :modal-toggle="id"
        ></div>
        <div class="Modal__container">
            <button
                class="Modal__close"
                :modal-toggle="id"
            ></button>

            <slot/>

        </div>
    </dialog>
</template>
