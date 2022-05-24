
/**
 * Examples for c-text-field.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */
export const validation = `form: FormGroup;

errorMessages = {
  required: 'This is a required field',
  min: 'You must be at least 18 to enter',
  minlength: 'Please enter at least 8 characters',
};

ngOnInit(): void {
  this.form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
}

isValid(field) {
  const input = this.form.get(field);

  return input?.pristine || input?.valid || false;
}

errors(field) {
  const errors = Object.keys(this.form.get(field)?.errors || {});

  if (!errors) return '';

  return this.errorMessages[errors[0]] || '';
}

onSubmit() {
  alert(JSON.stringify(this.form.value, null, 2));

  this.form.reset();
}

`;

