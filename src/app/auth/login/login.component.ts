import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
    loginForm : FormGroup;

    constructor(private fb: FormBuilder){}
    ngOnInit() {
    }
    initForm(){
        this.loginForm = this.fb.group({

        })
    }

    submit(){
        
    }

}