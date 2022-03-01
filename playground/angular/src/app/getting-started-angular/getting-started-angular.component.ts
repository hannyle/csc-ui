import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-getting-started-angular',
  templateUrl: './getting-started-angular.component.html',
  styleUrls: ['./getting-started-angular.component.scss'],
})
export class GettingStartedAngularComponent implements OnInit {
  accessorUsage = `import { NgModule } from '@angular/core';
import { CscUiAccessorModule } from 'csc-ui-accessor';

@NgModule({
  imports: [
    CscUiAccessorModule,
  ],
})
export class AppModule { }`;
  form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      consent: [false, [Validators.requiredTrue]],
    });

    console.log(this.form);
    console.log({
      valid: this.form.controls['username'].valid,
      dirty: this.form.controls['username'].dirty,
      touched: this.form.controls['username'].touched,
    });
  }

  get consent() {
    return this.form.get('consent');
  }

  get password() {
    return this.form.get('password');
  }

  get username() {
    return this.form.get('username');
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
