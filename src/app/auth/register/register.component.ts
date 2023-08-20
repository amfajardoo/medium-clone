import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGISTER_IMPORTS } from '@common/imports';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: REGISTER_IMPORTS,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);
  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    console.log('form', this.form.getRawValue());
  }
}
