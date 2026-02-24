import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validPseudo } from '../validators/validPseudo.validator';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginInfo!: FormGroup;
  pseudoCtrl!: FormControl;
  passwordCtrl!: FormControl;
  error!:string

  constructor(private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.error='';
    this.initForm()

  }

  initForm(): void {
    this.loginInfo = new FormGroup({
      pseudo: new FormControl('', [Validators.required, validPseudo()]),
      password: new FormControl('', [Validators.required]) // Ajout des crochets pour bien appliquer le validateur    })
    })
  }

  login(): void {
    this.authService.login(this.loginInfo.value);
    const token = this.authService.getToken();

    if (token) {
      this.router.navigateByUrl('/admin'); // Redirige vers la page admin si connecté
    } else {
      this.error="Login ou password incorrect!";
    }
  }


  getErrorMessage(control: AbstractControl | null): string {
    if (!control) return ''; // Évite l'erreur en cas de null
    if (control.hasError('required')) {
      return 'Ce champ est obligatoire';
    } else if (control.hasError('wrongPseudo')) {
      return 'Le pseudo doit commencer par une majuscule et contenir au moins un chiffre';
    }
    return '';
  }






}
