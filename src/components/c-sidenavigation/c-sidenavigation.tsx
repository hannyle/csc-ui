import { Component, Host, h, Prop, Listen, Element } from '@stencil/core';
/**
 * @group Navigation
 */
@Component({
  tag: 'c-sidenavigation',
  styleUrl: 'c-sidenavigation.scss',
  shadow: true,
})
export class CSidenavigation {
  /**
   * Mobile version
   */
  @Prop() mobile: boolean;

  /**
   * Mobile version menu visibility
   */
  @Prop({ mutable: true }) menuVisible: boolean = false; // eslint-disable-line

  @Element() host: HTMLCSidenavigationElement;

  @Listen('itemChange')
  handleChange(event: Event) {
    const slotted = this.host.querySelectorAll('c-sidenavigationitem');

    slotted.forEach((item) => {
      item.active = false;
    });

    (event.target as HTMLCSidenavigationitemElement).active = true;
  }

  componentDidLoad() {
    window.addEventListener('click', (event: MouseEvent) => {
      if (
        (event.target as HTMLElement).matches('c-navigationbutton') ||
        (event.target as HTMLElement).matches('c-sidenavigation')
      ) {
        this.menuVisible = !this.menuVisible;
      }
    });
  }

  render() {
    const classes = {
      'c-sidenavigation': true,
      'hide-menu': !this.menuVisible,
      mobile: !!this.mobile,
      desktop: !this.mobile,
    };

    return (
      <Host class={{ desktop: !this.mobile }}>
        <nav class={classes} role="menubar">
          <slot></slot>

          <div class="vertical-spacer"></div>

          <slot name="bottom"></slot>
        </nav>

        {this.menuVisible && this.mobile && (
          <div class="c-overlay c-fadeIn"></div>
        )}
      </Host>
    );
  }
}
