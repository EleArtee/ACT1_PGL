import { Component, OnInit } from '@angular/core';
import { TtgameService } from '../services/ttgame.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-ttg',
  templateUrl: './my-ttg.page.html',
  styleUrls: ['./my-ttg.page.scss'],
})
export class MyTtgPage implements OnInit {

  ttgames: any = [];


  constructor(private ttgameService: TtgameService,
    private router: Router
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

  goToUpdate(id: any){


    
    this.router.navigateByUrl("/ttgame-update/"+id)
}
}
