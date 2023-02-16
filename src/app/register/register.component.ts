import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm : FormGroup
  constructor(private fb : FormBuilder){
    // this.registerForm = new FormGroup({
    //   email : new FormControl('', [ Validators.required]),
    //   password : new FormControl('', [ Validators.required ])
    // });
    this.registerForm = this.fb.group({
      email : ['',
      [ Validators.required,
        Validators.pattern("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/")
      ],
    ],
    name:['', [Validators.required]],

    username:['', 
    [ Validators.required,
      this.noWhiteSpacesValidator
    ]],

    password : ['', 
    [ Validators.required,
      Validators.minLength(8),
      Validators.pattern("^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\w)(?=.*[A-Z])(?=.*\d).{8,}$)")
    ]],
    confirm_password: ['', [ Validators.required, this.matchpassword, Validators.minLength(8), Validators.pattern("^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\w)(?=.*[A-Z])(?=.*\d).{8,}$)") ]]
    })
  }

  submitRegiter(){}

  noWhiteSpacesValidator(form : FormControl){
    const isWhiteSpace = (form.value || '').trim.length == 0;
    const isValid = !isWhiteSpace;
    return isValid?null:{'whitespace':true};
  }

  matchpassword(password:FormControl,confirm:FormControl){
    return password == confirm?null:{'nomatch':true};
  }
}
