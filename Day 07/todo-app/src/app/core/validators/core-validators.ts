import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CoreValidators {
    public static counters(minChars: number, minWords: number): ValidatorFn {
        return (ctrl: AbstractControl) => CoreValidators._validate(ctrl, minChars, minWords);
    }

    private static _validate(ctrl: AbstractControl, minChars: number, minWords: number): null | ValidationErrors {
        let val = '';

        if ((ctrl) && (typeof(ctrl.value) === 'string'))
            val = <string>ctrl.value;

       
        const chars = val.length;
        const words = val.split(' ').filter(s => s).length;

        if ((chars >= minChars) && (words >= minWords)) return null;

        return {
            counters: {
                requiredChars: minChars, 
                chars: chars, 
                requiredWords: minWords, 
                words: words
            }
        }
    }
}