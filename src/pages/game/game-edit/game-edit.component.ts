import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service'

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit,OnDestroy {
  gameId:string="";
  game:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getGameSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private gameServ:GameService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    if(this.isNew){
      this.gameServ.games.push(this.game)
    }
    this.location.back();
  }
  ngOnInit() {
    this.getGameSubscribe = this.route.params.subscribe(params=>{
      this.getGame(params['sid']).then(game=>{
      console.log(game)
      this.gameId = game.id;
      this.game = game
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getGameSubscribe.unsubscribe();
  }

  getGame(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let game = {name:""}
        this.isNew = true;
        resolve(game)
      }
      let game = this.gameServ.games.find(item=>item.id == id)
      if(game){
        resolve(game)
      }else{
        reject("game not found")
      }
    })
    return p
}

}
