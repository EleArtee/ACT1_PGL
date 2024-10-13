import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TtgameService } from '../services/ttgame.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ttgameadd',
  templateUrl: './ttgameadd.page.html',
  styleUrls: ['./ttgameadd.page.scss'],
})
export class TtgameaddPage implements OnInit {

  ttgameForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private ttgameService: TtgameService,
    private route: Router) { 
      this.ttgameForm = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required])],
        publisher: ['', Validators.compose([Validators.required])],
        price: ['', Validators.compose([Validators.required])],
      })
    }

  ngOnInit() { }

  createTTGame() {
    if (this.ttgameForm.valid) {
      console.log('Formulario válido:', this.ttgameForm.value);
      this.ttgameService.create(this.ttgameForm.value).subscribe(response => {
        this.route.navigateByUrl("/my-ttg")
      })
    } else {
      console.log('Formulario no válido');
    }
  }

  getFormControl(field: string) {
    return this.ttgameForm.get(field)
  } 

}
