import {AbstractControl, ValidatorFn} from "@angular/forms";
export function customValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const name = control.value;
        const no = nameRe.test(name);
        return no ? {'custom': {name}} : null;
    };
}
