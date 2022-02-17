import { Component, Host, h, Prop } from '@stencil/core';
/**
 * @parent c-sidenavigation
 */
@Component({
  tag: 'c-subnavigationitem',
  styleUrl: 'c-subnavigationitem.scss',
  shadow: true,
})
export class CSubnavigationitem {
  @Prop() active: boolean;
  @Prop() href: string;
  redirect(event) {
    event.stopPropagation();
    const sidenav = document.querySelector('c-sidenavigation');
    sidenav.menuVisible = false;
    if (this.href) {
      window.location.href = this.href;
    }
  }
  render() {
    const classes = this.active && 'active';
    return (
      <Host onClick={(e) => this.redirect(e)} class={classes}>
        <slot></slot>
      </Host>
    );
  }
}
