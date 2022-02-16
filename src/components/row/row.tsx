import { Component, h, Prop } from '@stencil/core';

/**
 * @group Layout
 */
@Component({
  tag: 'c-row',
  styleUrl: 'row.scss',
  shadow: true,
})
export class Row {
  /**
   * Gap between items in px
   */
  @Prop() gap: number = 0;
  /**
   * Flex wrap
   */
  @Prop() wrap: boolean = true;
  /**
   * Align items vertically
   */
  @Prop() align: 'start' | 'center' | 'end' = 'start';
  /**
   * Justify content horizontally
   */
  @Prop() justify: 'start' | 'center' | 'end' | 'space-between' = 'start';

  render() {
    const classes = {
      'c-row': true,
      wrap: this.wrap,
      'no-wrap': !this.wrap,
      [`align-${this.align}`]: true,
      [`justify-${this.justify}`]: true,
    };
    return (
      <div class={classes} style={{ '--row-gap': `${this.gap}px` }}>
        <slot></slot>
      </div>
    );
  }
}
