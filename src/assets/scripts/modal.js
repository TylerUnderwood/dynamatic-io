 //////////////////////////////
// Modal

class Modal
{
    constructor( elementId ) {
        this.id = elementId;
        this.modal = document.getElementById(elementId);
        this.buttons = document.querySelectorAll(`[modal-toggle="${elementId}"]`);
        this.duration = this.modal.dataset.duration ? this.modal.dataset.duration : 300;
    }

    isActive() {
        return this.modal.dataset.state === 'active';
    }

    isAnimating() {
        return this.modal.dataset.state === 'enter'
            || this.modal.dataset.state === 'leave';
    }

    setState( state ) {
        this.modal.dataset.state = state;
        this.buttons.forEach( (button) => {
            button.dataset.state = state;
        })
    }

    open() {
        this.modal.showModal();
        this.setState('enter');

        document.documentElement.style.overflow = 'hidden';
        document.body.classList.add(this.id + '--active');

        setTimeout( () => {
            this.setState('active');
        }, this.duration);
    }

    close() {
        this.setState('leave');

        setTimeout( () => {
            this.setState('idle');

            document.documentElement.style.overflow = null;
            document.body.classList.remove(this.id + '--active');

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
        this.setState('idle');

        document.addEventListener('keydown', (event) => this.escClose(event));

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
