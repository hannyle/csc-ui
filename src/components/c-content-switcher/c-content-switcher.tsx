import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'c-content-switcher',
  styleUrl: 'c-content-switcher.scss',
  shadow: true,
})
export class ContentSwitcher {
  @Prop({ mutable: true }) value: number = 0;
  @Element() host: HTMLDivElement;
  @Event() changeValue: EventEmitter;

  get buttons() {
    const slotted = this.host.shadowRoot.querySelector(
      'slot',
    ) as HTMLSlotElement;

    return (slotted.assignedNodes() as HTMLElement[]).filter(
      (node) => node.tagName === 'C-BUTTON',
    );
  }

  clickEventListener(button, index) {
    return () => {
      this.value === index;

      for (let btn of this.buttons) {
        /* @ts-ignore */
        btn.outlined = true;
      }
      /* @ts-ignore */
      button.outlined = false;

      this.changeValue.emit(this.value);
    };
  }

  componentDidLoad() {
    for (let [index, button] of this.buttons.entries()) {
      /* @ts-ignore */
      button.noRadius = true;

      if (index !== this.value) {
        /* @ts-ignore */
        button.outlined = true;
      }

      const buttonElement = button.shadowRoot.querySelector('.csc-button');
      buttonElement.classList.add('grouped');

      if (index === 0) {
        buttonElement.classList.add('grouped--first');
      }

      if (index === this.buttons.length - 1) {
        buttonElement.classList.add('grouped--last');
      }

      button.addEventListener('click', this.clickEventListener(button, index));
    }
  }

  disconnectedCallback() {
    for (let [index, button] of this.buttons.entries()) {
      button.removeEventListener(
        'click',
        this.clickEventListener(button, index),
      );
    }
  }

  render() {
    return (
      <div class="c-content-switcher">
        <slot></slot>
      </div>
    );
  }
}
