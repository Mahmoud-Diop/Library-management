import { AbstractControl, ValidatorFn } from "@angular/forms";
export function validPseudo(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const pseudo = control.value;

        if (!pseudo) {
            return { wrongPseudo: 'Le pseudo est requis' };
        }

        const regex = /^[A-Z][a-zA-Z0-9]*\d+/;

        return regex.test(pseudo) ? null : { wrongPseudo: 'Le pseudo doit commencer par une majuscule et contenir au moins un chiffre' };
    };
}


