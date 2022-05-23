
/**
 * Examples for c-login-card.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */
export const overlay = `blendModes: CSelectItem[] = [
  { value: 'normal', name: 'normal' },
  { value: 'multiply', name: 'multiply' },
  { value: 'screen', name: 'screen' },
  { value: 'overlay', name: 'overlay' },
  { value: 'darken', name: 'darken' },
  { value: 'lighten', name: 'lighten' },
  { value: 'color-dodge', name: 'color-dodge' },
  { value: 'color-burn', name: 'color-burn' },
  { value: 'hard-light', name: 'hard-light' },
  { value: 'soft-light', name: 'soft-light' },
  { value: 'difference', name: 'difference' },
  { value: 'exclusion', name: 'exclusion' },
  { value: 'hue', name: 'hue' },
  { value: 'saturation', name: 'saturation' },
  { value: 'color', name: 'color' },
  { value: 'luminosity', name: 'luminosity' },
];

blendMode: CSelectItem = this.blendModes[1];

constructor(private _formBuilder: FormBuilder) {}

ngOnInit() {
  this.form = this._formBuilder.group({
    username: [null, [Validators.required]],
    password: [
      null,
      [Validators.required, Validators.pattern(/^([^0-9]*)$/), Validators.minLength(8)],
    ],
  });
}

isValid(field) {
  const input = this.form.get(field);

  return input?.pristine || input?.valid || false;
}

errors(field) {
  const errors = Object.keys(this.form.get(field)?.errors || {});

  if (!errors) return '';

  const error = errors[0];

  return this.errorMessages[error] || 'Invalid value';
}

onSubmit() {
  alert('Form submitted with the following data: ' + JSON.stringify(this.form.value, null, 2));
  this.form.reset();
}
`;

export const basic = `constructor(private _formBuilder: FormBuilder) {}

ngOnInit() {
  this.form = this._formBuilder.group({
    username: [null, [Validators.required]],
    password: [
      null,
      [Validators.required, Validators.pattern(/^([^0-9]*)$/), Validators.minLength(8)],
    ],
  });
}

isValid(field) {
  const input = this.form.get(field);

  return input?.pristine || input?.valid || false;
}

errors(field) {
  const errors = Object.keys(this.form.get(field)?.errors || {});

  if (!errors) return '';

  const error = errors[0];

  return this.errorMessages[error] || 'Invalid value';
}

onSubmit() {
  alert('Form submitted with the following data: ' + JSON.stringify(this.form.value, null, 2));
  this.form.reset();
}
`;

export const basicCSC = `constructor(private _formBuilder: FormBuilder) {}

ngOnInit() {
  this.form = this._formBuilder.group({
    username: [null, [Validators.required]],
    password: [
      null,
      [Validators.required, Validators.pattern(/^([^0-9]*)$/), Validators.minLength(8)],
    ],
  });
}

isValid(field) {
  const input = this.form.get(field);

  return input?.pristine || input?.valid || false;
}

errors(field) {
  const errors = Object.keys(this.form.get(field)?.errors || {});

  if (!errors) return '';

  const error = errors[0];

  return this.errorMessages[error] || 'Invalid value';
}

onSubmit() {
  alert('Form submitted with the following data: ' + JSON.stringify(this.form.value, null, 2));
  this.form.reset();
}
`;

