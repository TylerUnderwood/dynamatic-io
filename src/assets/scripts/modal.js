 //////////////////////////////
// Modal

class Modal
{
    constructor( elementId ) {
        this.id = elementId;
        this.modal = document.getElementById(elementId);
        this.buttons = document.querySelectorAll(`[modal-toggle="${elementId}"]`);
        this.duration = this.modal.dataset.duration ? this.modal.dataset.duration : 300;
        this.init();
    }

    isActive() {
        return this.modal.dataset.state === 'active';
    }

    isAnimating() {
        return this.modal.dataset.state === 'enter' || this.modal.dataset.state === 'leave';
    }

    setStateAttribute( state ) {
        this.modal.dataset.state = state;
        this.buttons.forEach( (button) => {
            button.dataset.state = state;
        })
    }

    setModalActive() {
        document.documentElement.style.overflow = 'hidden';
        document.body.classList.add(this.id + '--active');
    }

    setModalInactive() {
        document.documentElement.style.overflow = null;
        document.body.classList.remove(this.id + '--active');
    }

    open() {
        console.log('open');
        this.modal.showModal();
        this.setStateAttribute('enter');
        this.setModalActive();

        setTimeout( () => {
            this.setStateAttribute('active');
        }, this.duration);
    }

    close() {
        console.log('close');
        this.setStateAttribute('leave');

        setTimeout( () => {
            this.setStateAttribute('idle');
            this.setModalInactive();
            this.modal.close();
        }, this.duration);
    }

    toggle() {
        if ( this.isAnimating() ) return;
        this.isActive() ? this.close() : this.open();
    }

    escClose( event ) {
        let isKeyPressed = ( event.key === 'Escape' || event.keyCode === '27' );

        if ( !this.isActive() || !isKeyPressed ) { return };

        event.preventDefault();
        this.toggle();
    }

    init() {
        this.setStateAttribute('idle');

        document.addEventListener('keydown', ( event ) => {
            this.escClose(event)
        });

        this.buttons.forEach((button) => {
            button.addEventListener('click', ( event ) => {
                event.preventDefault();
                this.toggle();
            });
        });

        if ( this.modal.dataset.duration ) {
            this.modal.style.setProperty('--modal-duration', this.duration + 'ms');
        }
    }
}

// document.querySelectorAll('[modal]').forEach( element => {
//     if ( !element.id ) {
//         console.log("Modal element needs ID to reference");
//     } else {
//         new Modal( element.id );
//     }
// });

window.Modal = Modal;

export default Modal;
