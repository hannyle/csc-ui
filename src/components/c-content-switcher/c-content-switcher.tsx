import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
  Watch,
  Listen,
} from '@stencil/core';

/**
 * @group Tabs
 * @slot - Default slot for the c-button elements
 */
@Component({
  tag: 'c-content-switcher',
  styleUrl: 'c-content-switcher.scss',
  shadow: true,
})
export class ContentSwitcher {
  /**
   * Value of the content switcher
   */
  @Prop({ mutable: true }) value!: number | string;
  /**
   * Always require a selection
   */
  @Prop() mandatory: boolean = false;
  /**
   * Size of the buttons
   */
  @Prop() size: 'default' | 'small' = 'default';
  /**
   * Disable the content switcher
   */
  @Prop({ attribute: 'disabled' }) hostDisabled = false;

  /**
   * Emit changes to the parent
   */
  @Event() changeValue: EventEmitter;
  @Element() el: HTMLCContentSwitcherElement;

  @Watch('value')
  watchPropHandler(value: string | number) {
    if (value !== null) {
      this.buttons[value].outlined = false;
    }

    this.changeValue.emit(value);
  }

  @Listen('click', { passive: true })
  onHandleClickEvent(ev) {
    const clickStack = ev.composedPath();
    const switcher = clickStack.find((e) => e.tagName === 'C-CONTENT-SWITCHER');
    const button = clickStack.find((e) => e.tagName === 'C-BUTTON');

    if (!button || !switcher) return;

    const { index } = button.dataset;

    // Disable deselection if mandatory prop is set to true
    if (
      (this.mandatory &&
        !this._isString(this.value) &&
        +index === +this.value) ||
      (this.mandatory &&
        this._isString(this.value) &&
        button.value === this.value)
    ) {
      return;
    }

    switcher.childNodes.forEach((btn: HTMLCButtonElement) => {
      btn.outlined = true;
    });

    this.value = this.value === +index ? null : +index;
  }

  get buttons() {
    return Array.from(this.el.childNodes) as HTMLCButtonElement[];
  }

  get valueIsString() {
    return Number.isNaN(+this.value);
  }

  componentDidLoad() {
    // use 0 as value if nothing is provided
    this.value = this.value ?? 0;

    this.buttons.forEach((button: HTMLCButtonElement, index) => {
      button.setAttribute('data-index', String(index));
      button.noRadius = true;
      button.fit = true;
      button.disabled = this.hostDisabled;
      button.dense = this.size === 'small';

      if (
        (!this._isString(this.value) && index !== +this.value) ||
        (this._isString(this.value) && button.value !== this.value)
      ) {
        button.outlined = true;
      }

      const buttonElement = button.shadowRoot.querySelector('.csc-button');

      buttonElement.classList.add('grouped');
    });
  }

  private _isString(value) {
    return Number.isNaN(+value);
  }

  render() {
    const classes = {
      'c-content-switcher': true,
      'c-content-switcher--disabled': this.hostDisabled,
    };

    return (
      <div class={classes}>
        <slot></slot>
      </div>
    );
  }
}
