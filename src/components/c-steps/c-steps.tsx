import {
  Component,
  Host,
  h,
  Prop,
  EventEmitter,
  Event,
  Element,
  Watch,
  State,
} from '@stencil/core';

/**
 * @group Indicators
 * @slot - Default slot
 */
@Component({
  tag: 'c-steps',
  styleUrl: 'c-steps.scss',
  shadow: true,
})
export class CSteps {
  @Element() host: HTMLCStepsElement;

  /**
   * Value of the accordion (current step number)
   */
  @Prop() value!: number | string;

  /**
   * Emit changes to the parent
   */
  @Event({ bubbles: false }) changeValue: EventEmitter<number | string>;

  @State() isMobile = false;

  @State() label = '';

  @Watch('value')
  watchPropHandler() {
    this._handleDividers();
  }

  private _isInitialized = false;

  private _resizeObserver: ResizeObserver;

  private _stepElements: NodeListOf<HTMLCStepElement>;

  private _handleDividers() {
    this._stepElements = this.host.querySelectorAll('c-step');
    const dividers: NodeListOf<HTMLDivElement> =
      this.host.querySelectorAll('.divider');

    this._stepElements.forEach((item, index) => {
      item.current = index + 1 === +this.value;
      item.complete = index + 1 < +this.value;

      if (index + 1 < this._stepElements.length) {
        const div = this._isInitialized
          ? dividers[index]
          : document.createElement('div');

        div.classList.toggle('complete', !!item.complete);

        if (!this._isInitialized) {
          div.classList.add('divider');

          item.after(div);
        }
      }

      if (item.current) {
        this.label = item.textContent;
      }
    });

    this._isInitialized = true;
  }

  componentDidLoad() {
    this._handleDividers();

    this._resizeObserver = new ResizeObserver(([entry]) => {
      const maxWidth = this._stepElements.length * 180;

      this.isMobile = maxWidth > entry.contentRect.width;

      this.host.shadowRoot
        .querySelector('.c-steps')
        .classList.toggle('mobile', this.isMobile);

      this._stepElements.forEach((node) => {
        node.classList.toggle('mobile', this.isMobile);
      });
    });

    this._resizeObserver.observe(this.host);
  }

  render() {
    return (
      <Host>
        <div class="c-steps">
          <slot></slot>
        </div>
        {this.isMobile && (
          <div class="c-steps__label">{this.label || 'Esko Mörkö'}</div>
        )}
      </Host>
    );
  }
}
