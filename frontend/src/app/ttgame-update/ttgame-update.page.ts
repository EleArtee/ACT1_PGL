import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TtgameService } from '../services/ttgame.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ttgame-update',
  templateUrl: './ttgame-update.page.html',
  styleUrls: ['./ttgame-update.page.scss'],
})
export class TtgameUpdatePage implements OnInit {

  ttgameForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ttgameService: TtgameService,
    private route: Router) { 
      this.ttgameForm = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required])],
        publisher: ['', Validators.compose([Validators.required])],
        price: ['', Validators.compose([Validators.required])],
      })
    }

  ttgames: any = [];

   id = this.activateRoute.snapshot.paramMap.get('id');

  ngOnInit() {
   /*  this.ttgameService.getOneGame(this.id).subscribe((body)=>{
      var ttgame = JSON.parse(JSON.stringify(body))

      this.ttgameForm.value.name= ttgame.name;
      this.ttgameForm.value.publisher= ttgame.publisher;
      this.ttgameForm.value.price=ttgame.price; 
    });*/
   
    

   }

   getOneGame(){

    this.ttgameService.getOneGame(this.id).subscribe(response =>{
      this.ttgames = response;
    });
  }


  getAllTTGames(){
    this.ttgameService.getTTGame().subscribe(response =>{
      this.ttgames = response;
    });
  }

  updateTTGame() {
    if (this.ttgameForm.valid) {
      console.log('Formulario válido:', this.ttgameForm.value);
      this.ttgameService.update(this.id, this.ttgameForm.value).subscribe(response => {
        //this.getAllTTGames();
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
