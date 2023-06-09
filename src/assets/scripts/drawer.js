 //////////////////////////////
// Drawer

class Drawer
{
    constructor( id ) {
        this.id = id;
        this.drawer = document.getElementById(id);
        this.buttons = document.querySelectorAll(`[drawer-toggle="${id}"]`);
        this.anchors = document.querySelectorAll(`[href="#${id}"]`);
        this.toggles = [...this.buttons, ...this.anchors]
        this.parts = document.querySelectorAll(`[drawer-part="${id}"]`);
        this.duration = 300;
    }

    log() {
        console.log({
            id: this.id,
            height: this.getHeight(),
            open: this.drawer.hasAttribute('open'),
        })
    }

    isActive() {
        return this.drawer.dataset.state === 'active';
    }

    isAnimating() {
        return this.drawer.dataset.state === 'enter'
                || this.drawer.dataset.state === 'leave';
    }

    getHeight() {
        const elements = Array.from(this.drawer.children);
        let height = 0;

        const getTotalHeight = (element) => {
            // Get the DOM Node if you pass in a string
            element = (typeof element === 'string') ? document.querySelector(element) : element;

            var styles = window.getComputedStyle(element);
            var margin = parseFloat(styles['marginTop']) +
                                     parseFloat(styles['marginBottom']);

            return Math.ceil(element.offsetHeight + margin);
        }

        elements.forEach(element => {
            height += getTotalHeight(element);
        })

        return height;
    }

    setState(state) {
        this.drawer.dataset.state = state;

        [...this.toggles, ...this.parts].forEach((part) => {
            part.dataset.drawerState = state;
        })
    }

    cycleState() {
        const states = ['idle', 'enter', 'active', 'leave'];
        const currentState = this.drawer.dataset.state;
    }

    open() {
        this.drawer.setAttribute('open', true);
        this.setState('enter');
        this.drawer.style.height = `${this.getHeight()}px`;

        setTimeout( () => {
            this.setState('active');
            this.drawer.style.height = null;
        }, this.duration);
    }

    close() {
        this.drawer.style.height = `${this.getHeight()}px`;
        this.setState('leave');

        setTimeout( () => {
            this.drawer.style.height = 0;
        }, 0);

        setTimeout( () => {
            this.setState('idle');
            this.drawer.removeAttribute('open');
        }, this.duration);
    }

    toggle() {
        if ( this.isAnimating() ) return;
        this.isActive() ? this.close() : this.open();
    }

    handleBlur = (event) => {
        const currentTarget = event.currentTarget;

        if (this.isActive) return;

        requestAnimationFrame(() => {
            if (!currentTarget.contains(document.activeElement)) {
                this.open();
            }
        });
    };

    init() {
        if (this.drawer.hasAttribute('open')) {
            this.setState('active');
        } else {
            this.setState('idle');
            this.drawer.style.height = 0;
        }

        // this.drawer.addEventListener('blur', this.handleBlur);

        this.toggles.forEach((button) => {
            button.addEventListener('click', ( event ) => {
                event.preventDefault();
                this.toggle();
            });
        });
    }
}

function initAllDrawers() {
    document.querySelectorAll('[drawer]').forEach( element => {
        if ( !element.id ) {
            console.warn("Drawer needs an ID to reference")
        } else {
            new Drawer( element.id ).init();
        }
    });
}

export default Drawer;
