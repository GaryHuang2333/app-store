import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  @Input() game:any
  @Output() gameClick = new EventEmitter<any>();
  constructor(private gameServ:GameService) { 
  }
  onGameClick(){
    this.gameClick.emit(this.game)
  }
  check(){
    if(this.game.check&&this.game.check==true){
      this.game.check = false;
    }else{
      this.game.check = true
    }
  }
  isChecked(){
    if(this.game.check&&this.game.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
