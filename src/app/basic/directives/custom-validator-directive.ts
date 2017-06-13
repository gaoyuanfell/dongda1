import {AbstractControl, NG_VALIDATORS, Validators, Validator} from "@angular/forms";
import {Directive, Input, OnChanges, SimpleChanges} from "@angular/core";
import {customValidator} from "./custom-validator";

/*@Directive({
    selector: '[custom]',
    providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
})*/
export class CustomValidatorDirective implements Validator, OnChanges {
    @Input() custom: string;
    private valFn = Validators.nullValidator;
    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['custom'];
        if (change) {
            const val: string | RegExp = change.currentValue;
            const re = val instanceof RegExp ? val : new RegExp(val, 'i');
            this.valFn = customValidator(re);
        } else {
            this.valFn = Validators.nullValidator;
        }
    }
    validate(control: AbstractControl): {[key: string]: any} {
        console.info(control);
        return this.valFn(control);
    }
}
