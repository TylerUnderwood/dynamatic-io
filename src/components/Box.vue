<script>
// TODO: needs refactor to use layout.scss
export default {
  props: [
    'display',
    'align',
  ],
  methods: {
    discombobulate() {
      let blueprint = {
        root: {
          o: "row",
          x: "left",
          y: "top"
        }
      };
      let display = this.display.split(' ');
      let align = this.align.split(' / ');
      let alignX = align[0].split(' ');
      let alignY = align[1].split(' ');

      let parseClasses = ( classes, key ) => {
        classes.forEach((breakpoint, index) => {
          if ( index === 0 && !breakpoint.includes(':') ) {
            blueprint.root[key] = breakpoint;
            return;
          }
          if ( breakpoint.includes(':') ) {
            breakpoint = breakpoint.split(':');
            if ( breakpoint[0] in blueprint ) {
              blueprint[breakpoint[0]][key] = breakpoint[1];
            } else {
              blueprint[breakpoint[0]] = { [key]: breakpoint[1] };
            }
          }
        });
      }

      parseClasses(display, 'o');
      parseClasses(alignX, 'x');
      parseClasses(alignY, 'y');

      return blueprint;
    },

    displayMod( display ) {
      display = display.replace(/row/g, 'flex-row');
      display = display.replace(/col/g, 'flex-col');
      return display;
    },

    alignMod( blueprint ) {
      let alignment = [];

      Object.keys(blueprint).forEach(breakpoint => {
        let bp = blueprint[breakpoint];
        let lastOrientation = 'row';
        const addClass = ( key, orientation, aligner) => {
          let bpName = breakpoint === 'root' ? '' : breakpoint + ':';
          let currentOrientation = lastOrientation;
          if ( bp.o ) {
            currentOrientation = bp.o;
            lastOrientation = currentOrientation;
          }
          if ( key in bp && currentOrientation === orientation ) {
            alignment.push(`${bpName}${aligner}-${bp[key]}`);
          }
        }
        addClass( 'x', 'row', 'justify');
        addClass( 'x', 'col', 'items');
        addClass( 'y', 'row', 'items');
        addClass( 'y', 'col', 'justify');
      })

      alignment = alignment.join(' ');
      return alignment;
    },

    allClasses() {
      let result = [];
      let classes = ['flex-row', 'flex-col'];
      let alignments = ['items', 'content', 'justify'];
      let directions = ['start', 'end', 'center', 'between'];
      let breakpoints = ['', 'sm:', 'md:', 'lg:'];

      alignments.forEach(aligner => {
        directions.forEach(direction => {
          classes.push(`${aligner}-${direction}`);
        });
      });

      breakpoints.forEach(breakpoint => {
        classes.forEach(className => {
          result.push(`${breakpoint}${className}`);
        });
      });

      result = result.join(' ');
      return result;
    },

    classBuilder() {
      let blueprint = this.discombobulate();
      let result = '';
      result += this.displayMod( this.display );
      result += ' ';
      result += this.alignMod( blueprint );
      // console.log(blueprint);
      // console.log(result);
      // console.log(this.allClasses());
      return result;
    },
  },

  data() {
    return {
      layout: [ 'flex', this.classBuilder(), 'w-full' ],
      all: 'flex-row flex-col items-start items-end items-center items-between content-start content-end content-center content-between justify-start justify-end justify-center justify-between sm:flex-row sm:flex-col sm:items-start sm:items-end sm:items-center sm:items-between sm:content-start sm:content-end sm:content-center sm:content-between sm:justify-start sm:justify-end sm:justify-center sm:justify-between md:flex-row md:flex-col md:items-start md:items-end md:items-center md:items-between md:content-start md:content-end md:content-center md:content-between md:justify-start md:justify-end md:justify-center md:justify-between lg:flex-row lg:flex-col lg:items-start lg:items-end lg:items-center lg:items-between lg:content-start lg:content-end lg:content-center lg:content-between lg:justify-start lg:justify-end lg:justify-center lg:justify-between'
    }
  }
}
</script>

<template>
    <div :class="layout">
        <slot/>
    </div>
</template>
