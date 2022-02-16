import {
  Component,
  Prop,
  h,
  Event,
  Element,
  EventEmitter,
  Listen,
} from '@stencil/core';
import { createRipple } from '../../utils/utils';

/**
 * @group Content Switchers
 */
@Component({
  tag: 'c-tab-button',
  styleUrl: 'tab-button.scss',
  shadow: true,
})
export class TabButton {
  /**
   * Disable button
   */
  @Prop() disabled = false;

  /**
   * Mark as active
   */
  @Prop() active = false;

  /**
   * Label of the button
   */
  @Prop() label: string;

  /**
   * Id of the button
   */
  @Prop({ attribute: 'id' }) hostId: string;

  /**
   * Value of the button
   */
  @Prop() value: number | string;

  /**
   * Emit tab change to parent
   * @private
   */
  @Event() tabChange: EventEmitter;

  /**
   * Emit value change to the parent
   */
  @Event({
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  changeValue: EventEmitter<number | string>;

  /**
   * Emit tab focus to the parent
   * @private
   */
  @Event() focusTab: EventEmitter;

  @Element() el: HTMLCTabButtonElement;

  private _container?: HTMLDivElement;

  @Listen('click', { passive: true })
  onTabClick(event) {
    if (this.active) return;

    createRipple(event, this._container);

    this.changeValue.emit(this.value);
  }

  @Listen('keydown', { capture: true })
  handleKeyDown(ev: KeyboardEvent) {
    if (this.active) return;

    if (['Space'].includes(ev.code)) {
      ev.preventDefault();
    }
  }

  @Listen('keyup', { capture: true })
  handleKeyUp(ev: KeyboardEvent) {
    if (this.active) return;

    if (['Space'].includes(ev.code)) {
      ev.preventDefault();
      this.changeValue.emit(this.value);
    }
  }

  private _onFocus = () => {
    this.focusTab.emit(this.value);
  };

  render() {
    // const classes = {
    //   'c-tab-button': true,
    //   active: !this.disabled && this.active,
    //   disabled: this.disabled,
    // };

    const classes = {
      'c-tab-button': true,
      'c-tab-button--active': !this.disabled && this.active,
      'c-tab-button--disabled': this.disabled,
    };

    // const subClasses = 'ripple c-tab-button-padding';
    // TODO: uusiks? outlinelle 4px tilaa ulkopuolelle?
    return (
      <div
        id={this.hostId}
        class={classes}
        tabindex="0"
        role="button"
        onFocus={this._onFocus}
      >
        <div
          class="c-tab-button__content"
          ref={(el) => (this._container = el as HTMLDivElement)}
        >
          <div class="c-tab-button__header">
            {this.label}
            <slot name="icon"></slot>
          </div>
          <div class="c-tab-button__description">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
