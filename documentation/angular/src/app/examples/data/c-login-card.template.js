
/**
 * Examples for c-login-card.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<form [formGroup]="form">
  <c-login-card background-position="50% 100%" src="assets/high-rise.jpg">
    <c-login-card-title>Login to service</c-login-card-title>

    <c-login-card-content>
      <div>
        Service name provides a platform for you to host your own applications and make them
        accessible over the web.
      </div>
      <c-text-field
        formControlName="username"
        label="Username"
        [valid]="isValid('username')"
        [validation]="errors('username')"
        cControl
      ></c-text-field>
      <c-text-field
        formControlName="password"
        hint="Please do not use numbers in your password"
        label="Password"
        type="password"
        [valid]="isValid('password')"
        [validation]="errors('password')"
        cControl
      ></c-text-field>
    </c-login-card-content>

    <c-login-card-actions justify="space-between">
      <c-button size="large" [disabled]="!form.valid" (click)="onSubmit()">Submit</c-button>
    </c-login-card-actions>

    <c-link href="http://csc.fi" underline>Forgot password?</c-link>
  </c-login-card>
</form>`;

export const overlay = `<form [formGroup]="form">
  <c-login-card
    background-position="50% 0%"
    src="assets/wall2.jpg"
    [overlay]="overlay"
    [overlayBlendMode]="blendMode.value"
  >
    <c-login-card-title>Login to service</c-login-card-title>

    <c-login-card-content>
      <div>
        Service name provides a platform for you to host your own applications and make them
        accessible over the web.
      </div>
      <c-text-field
        formControlName="username"
        label="Username"
        [valid]="isValid('username')"
        [validation]="errors('username')"
        cControl
      ></c-text-field>
      <c-text-field
        formControlName="password"
        hint="Please do not use numbers in your password"
        label="Password"
        type="password"
        [valid]="isValid('password')"
        [validation]="errors('password')"
        cControl
      ></c-text-field>
    </c-login-card-content>

    <c-login-card-actions justify="space-between">
      <c-button size="large" [disabled]="!form.valid" (click)="onSubmit()">Submit</c-button>
    </c-login-card-actions>

    <c-link href="http://csc.fi" underline>Forgot password?</c-link>
  </c-login-card>
</form>

<div class="mt-4">
  <c-row gap="8">
    <c-button (click)="overlay = !overlay">Toggle overlay</c-button>
    <c-select
      [(ngModel)]="blendMode"
      [items]="blendModes"
      label="Overlay blend mode"
      hide-details
      cControl
    ></c-select>
  </c-row>
</div>`;

export const basicCSC = `<form [formGroup]="form">
  <c-login-card background-position="50% 0%" src="assets/bg.png">
    <c-login-card-title>Login to service</c-login-card-title>

    <c-login-card-content>
      <div>
        Service name provides a platform for you to host your own applications and make them
        accessible over the web.
      </div>
      <c-text-field
        formControlName="username"
        label="Username"
        [valid]="isValid('username')"
        [validation]="errors('username')"
        cControl
      ></c-text-field>
      <c-text-field
        formControlName="password"
        hint="Please do not use numbers in your password"
        label="Password"
        type="password"
        [valid]="isValid('password')"
        [validation]="errors('password')"
        cControl
      ></c-text-field>
    </c-login-card-content>

    <c-login-card-actions justify="space-between">
      <c-button size="large" [disabled]="!form.valid" (click)="onSubmit()">Submit</c-button>
    </c-login-card-actions>

    <c-link href="http://csc.fi" underline>Forgot password?</c-link>
  </c-login-card>
</form>`;
