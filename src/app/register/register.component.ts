import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Register} from "../model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

    types = [
        {name:'管理员',type:1},
        {name:'部门经理',type:2},
        {name:'销售',type:3},
        {name:'财务',type:4},
    ];

    registerForm: FormGroup;

    constructor(private fb: FormBuilder,private _router:Router) {

    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.registerForm = this.fb.group(new Register());
        this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    onValueChanged(data?:any){
        if(!this.registerForm)return;
        const form = this.registerForm;

        for(const field in this.formErrors){
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty) {
                console.info(control);
            }
        }

    }

    formErrors = {
        'password': '',
        '_password': '',
        'type': '',
        'company': '',
        'address': '',
        'email': '',
        'phone': '',
        'nickName': '',
    };

    registerBtn() {
        this._router.navigate(['/!/index']);
    }
}
