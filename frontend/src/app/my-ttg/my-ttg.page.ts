import { Component, OnInit } from '@angular/core';
import { TtgameService } from '../services/ttgame.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-ttg',
  templateUrl: './my-ttg.page.html',
  styleUrls: ['./my-ttg.page.scss'],
})
export class MyTtgPage implements OnInit {

  ttgames: any = [];


  constructor(private ttgameService: TtgameService,
    private router: Router,
    public alertController: AlertController
  ) { }

  
  ngOnInit() {
    this.getAllTTGames();
  }

  getAllTTGames(){
    this.ttgameService.getTTGame().subscribe(response =>{
      this.ttgames = response;
    });
  }

  goToAddGame(){
    this.router.navigateByUrl("/ttgameadd")
  }

  deleteTTGame(id: any){
    this.ttgameService.delete(id).subscribe(response => {
      this.getAllTTGames();
    })
  }


  async confirmarBorrar(id: any){
    const alert = await this.alertController.create({
      message: 'Si borra esto no lo podrá recuperar ¿Seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass:'icon-color',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          cssClass:'icon-color',
          handler: () => {
            this.deleteTTGame(id)
            console.log('Items Removed!');
            //Call you API to remove Items here.
          }
        }
      ]
    });
    alert.present();
  }

  goToUpdate(id: any){

    
    
    this.router.navigateByUrl("/ttgame-update/"+id)
}
}
