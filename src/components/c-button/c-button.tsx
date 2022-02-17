import { Component, Prop, h } from '@stencil/core';
import { mdiPlus, mdiMinus, mdiAccount, mdiPencil } from '@mdi/js';
import { createRipple } from '../../utils/utils';

/**
 * @group Buttons
 * @slot - Button text
 * @slot icon - Icon
 */
@Component({
  tag: 'c-button',
  styleUrl: 'c-button.scss',
  shadow: true,
})
export class Button {
  /**
   * Outlined button style
   */
  @Prop() outlined = false;

  /**
   * Light button background
   */
  @Prop() ghost = false;

  /**
   * Transparent button background
   */
  @Prop() text = false;

  /**
   * Display loader on the button
   */
  @Prop() loading = false;

  /**
   * Fit width to containing element
   */
  @Prop() fit = false;

  /**
   * Remove the default border radius
   */
  @Prop() noRadius = false;

  /**
   * Disable the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Name of the icon to be displayed in the button
   *
   * @deprecated Please use the icon slot instead
   */
  @Prop() icon: 'plus' | 'minus' | 'account' | 'edit';

  /**
   * Value for the button
   * - for use in the c-content-switcher
   */
  @Prop() value?: number | string;

  /**
   * Id of the button
   */
  @Prop({ attribute: 'id' }) hostId: string;

  /**
   * Size of the button
   */
  @Prop() size: 'default' | 'small' | 'large' = 'default';

  private _container?: HTMLDivElement;

  private _onClick = (event) => {
    createRipple(event, this._container);
  };

  render() {
    const SPINNER_SMALL: SVGImageElement = (
      <svg
        class="spinner"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="spinner__circle" cx="50" cy="50" r="45" />
      </svg>
    );

    let selectedIcon = null;
    let svg: SVGImageElement;

    if (this.icon) {
      const icons = {
        plus: mdiPlus,
        minus: mdiMinus,
        account: mdiAccount,
        edit: mdiPencil,
      };
      selectedIcon = icons[this.icon];
      svg = (
        <svg class="button-icon" width="16" height="16" viewBox="0 0 22 22">
          <path d={selectedIcon} />
        </svg>
      );
    }

    const buttonClasses = {
      'c-button': true,
      'c-button--disabled': !!this.disabled,
      'c-button--ghost': !!this.ghost,
      'c-button--small': this.size === 'small',
      'c-button--large': this.size === 'large',
      'c-button--text': !!this.text,
      'c-button--fitted': !!this.fit,
      'c-button--outlined': !!this.outlined,
      'c-button--no-radius': !!this.noRadius,
    };

    const innerClasses = {
      'c-button-padding': true,
      'hide-text': this.loading,
    };

    const hostClasses = {
      fit: !!this.fit,
      'no-radius': !!this.noRadius,
    };

    return (
      <button
        id={this.hostId}
        class={hostClasses}
        tabindex="0"
        role="button"
        disabled={this.disabled}
        onClick={this._onClick}
      >
        <div
          class={buttonClasses}
          ref={(el) => (this._container = el as HTMLDivElement)}
        >
          {this.loading && <div class="spinner_wrapper">{SPINNER_SMALL}</div>}
          <div class={innerClasses}>
            <slot name="icon"></slot>
            {svg}
            <slot></slot>
          </div>
        </div>
      </button>
    );
  }
}
