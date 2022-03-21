import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { mdiCloseCircle, mdiEye, mdiEyeOff } from '@mdi/js';

/**
 * @group Form
 */
@Component({
  tag: 'c-text-field',
  styleUrl: 'c-text-field.scss',
  shadow: true,
})
export class CTextField {
  /**
   * Auto focus the input
   */
  @Prop() autofocus = false;

  /**
   * Disable the input
   */
  @Prop() disabled = false;

  /**
   * Render a hidden input outside the shadow dom
   */
  @Prop() form = false;

  /**
   * Hide the hint and error messages
   */
  @Prop() hideDetails = false;

  /**
   * Hint text for the input
   */
  @Prop() hint = '';

  /**
   * Id of the input
   */
  @Prop({ attribute: 'id' }) hostId: string;

  /**
   * Label of the input
   */
  @Prop() label: string;

  /**
   * Maximum value on a numeric input
   */
  @Prop() max: number = null;

  /**
   * Minimum value on a numeric input
   */
  @Prop() min: number = null;

  /**
   * Name of the input
   */
  @Prop() name: string;

  /**
   * Numeric input
   *
   * @deprecated Use type="number" instead
   */
  @Prop() number = false;

  /**
   * Placeholder of the input
   */
  @Prop() placeholder: string;

  /**
   * Mark as readonly
   */
  @Prop() readonly = false;

  /**
   * Set the input as required
   */
  @Prop() required: boolean = null;

  /**
   * Rows on the input
   */
  @Prop() rows: number = 1;

  /**
   * Shadow variant of the input
   */
  @Prop() shadow = false;

  /**
   * Step size on a numeric input
   */
  @Prop() step: number = null;

  /**
   * Type of the input
   */
  @Prop() type: string;

  /**
   * Set the validíty of the input
   */
  @Prop() valid: boolean = true;

  /**
   * Manual validation
   */
  @Prop() validate: boolean = false;

  /**
   * Validate the input on blur
   */
  @Prop() validateOnBlur: boolean = false;

  /**
   * Custom validation message
   */
  @Prop() validation: string = 'Required field';

  /**
   * Value of the input
   */
  @Prop({ mutable: true }) value: string;

  /**
   * Emit changes to the parent
   */
  @Event() changeValue: EventEmitter;

  @State() isFocused = false;

  @State() labelWidth = 0;

  @State() preSlotWidth = 0;

  @State() messageOptions = {
    show: true,
    type: 'hint',
    content: '',
  };

  @Element() hiddenEl!: HTMLCTextFieldElement;

  private _inputElement?: HTMLInputElement | HTMLTextAreaElement;

  private _labelRef: HTMLLabelElement;

  private _originalType = '';

  private _validationIcon = (
    <svg height="16px" width="16px" viewBox="0 0 24 24">
      <path d={mdiCloseCircle} />
    </svg>
  );

  @Watch('validate')
  validateChange(newValue: boolean) {
    if (newValue) {
      this._handleValidation(this.valid);
    }
  }

  @Watch('validation')
  onValidationMessageChange(message: string) {
    this.onValidChange(message?.length === 0);
  }

  @Watch('valid')
  onValidChange(valid: boolean) {
    if (this.validateOnBlur) return;

    this._handleValidation(valid || this.valid);
  }

  componentWillLoad() {
    this._originalType = this.type;
  }

  componentDidLoad() {
    if (this.autofocus) {
      setTimeout(() => {
        this._onFocus();
      }, 500);
    }

    this._handleValidation(this.valid, 0);
    this._calculateElementWidths();
    this._observer.observe(this._labelRef);
  }

  get isActive() {
    return !!this.value || this.isFocused;
  }

  get passwordIcon() {
    return this.type === 'password' ? mdiEye : mdiEyeOff;
  }

  private _observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._calculateElementWidths();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 },
  );

  private _calculateElementWidths() {
    this.labelWidth = !!this.label
      ? Math.min(
          this._labelRef.scrollWidth * 0.75 + 6,
          (this.hiddenEl as HTMLElement).offsetWidth - 24,
        )
      : 0;

    const hasSlotContent = !!this.hiddenEl.querySelector('[slot="pre"]');

    this.preSlotWidth = hasSlotContent
      ? (this.hiddenEl.querySelector('[slot="pre"]') as HTMLSlotElement)
          .offsetWidth + 8
      : 0;
  }

  private _handleChange = (event) => {
    this.value = event.target.value;

    this.changeValue.emit(event.target.value);
  };

  private _handleValidation(valid: boolean, timeout = 200) {
    this.messageOptions = {
      ...this.messageOptions,
      show: false,
    };

    setTimeout(() => {
      this.messageOptions = {
        ...this.messageOptions,
        type: valid ? 'hint' : 'error',
        show: true,
        content: valid ? (
          <span>{this.hint}</span>
        ) : (
          <span>
            {this._validationIcon} {this.validation}
          </span>
        ),
      };
    }, timeout);
  }

  private _onBlur = () => {
    this.isFocused = false;

    if (this.validateOnBlur) {
      this._handleValidation(this.valid);
    }
  };

  private _onFocus = () => {
    this.isFocused = true;

    this._inputElement.focus();
  };

  private _renderBorders() {
    if (this.shadow) return;

    return (
      <fieldset aria-hidden="true">
        <legend
          style={{
            width: (this.isActive ? this.labelWidth : 0) + 'px',
          }}
        >
          <span class="notranslate"></span>
        </legend>
      </fieldset>
    );
  }

  private _renderInputElement() {
    const props = {
      shared: {
        id: this.hostId,
        name: this.name,
        onFocus: this._onFocus,
        onBlur: this._onBlur,
        disabled: this.disabled,
        readonly: this.readonly,
        'aria-labelledby': 'c-text-label',
        value: this.value,
        onInput: this._handleChange,
        onChange: this._handleChange,
        placeholder: this.isActive || !this.label ? this.placeholder : '',
        ref: (el) => (this._inputElement = el),
      },
      input: {
        type: this.number ? 'number' : this.type || 'text',
        min: this.min,
        max: this.max,
        step: this.step,
      },
      textArea: {
        rows: this.rows,
      },
    };

    const textInput = <input {...props.shared} {...props.input} />;

    const textArea = (
      <textarea {...props.shared} {...props.textArea}></textarea>
    );

    return this.rows > 1 ? textArea : textInput;
  }

  private _renderInputOutsideShadowRoot(
    container: HTMLElement,
    name: string,
    value: string | null,
  ) {
    let input = container.querySelector(
      'input.hidden-input',
    ) as HTMLInputElement | null;

    if (input === null) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = value || '';
  }

  private _renderLabel() {
    const classes = {
      active: this.isActive,
    };

    return (
      <label
        style={{
          '--c-label-position': (!this.isActive ? this.preSlotWidth : 0) + 'px',
        }}
        ref={(el) => (this._labelRef = el as HTMLLabelElement)}
        class={classes}
      >
        {this.label}
      </label>
    );
  }

  private _renderMessages() {
    if (this.hideDetails) return;

    const classes = {
      'c-input__details': true,
      active: this.messageOptions.show,
    };

    const messageClasses = {
      'c-input__message': true,
      [`c-input__message--${this.messageOptions.type}`]: true,
    };

    return (
      <div class={classes}>
        <div class={messageClasses}>{this.messageOptions.content}</div>
      </div>
    );
  }

  private _renderPasswordToggle() {
    if (this._originalType !== 'password') return;

    return (
      <svg
        class="c-input__password-toggle"
        viewBox="0 0 24 24"
        onClick={this._togglePasswordVisibility}
      >
        <path d={this.passwordIcon} />
      </svg>
    );
  }

  private _togglePasswordVisibility = () => {
    this.type = this.type === 'password' ? 'text' : 'password';
  };

  render() {
    if (this.form) {
      this._renderInputOutsideShadowRoot(this.hiddenEl, this.name, this.value);
    }

    const containerClasses = {
      'c-input': true,
      'c-input--disabled': this.disabled,
      'c-input--shadow': this.shadow,
      'c-input--textarea': this.rows > 1,
      'c-input--error': this.messageOptions.type === 'error',
    };

    return (
      <Host>
        <div class={containerClasses}>
          <div class="c-input__control">
            <div class="c-input__slot" onClick={this._onFocus}>
              {this._renderBorders()}

              <div class="c-input__field">
                <slot name="pre"></slot>

                {this._renderLabel()}

                {this._renderInputElement()}

                {this._renderPasswordToggle()}

                <slot name="post"></slot>
              </div>
            </div>

            {this._renderMessages()}
          </div>
        </div>
      </Host>
    );
  }
}
