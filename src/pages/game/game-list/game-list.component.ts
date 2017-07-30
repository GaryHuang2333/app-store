import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {GameService} from "../game.service";
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectGame:any={
    name:"No selected"
  };
  searchResult:Array<any>;
  games:Array<any>=[];

// test
  test: string="test";

  clickTest(event: any){
    let test = document.getElementById("test");
    test.innerHTML="After Change";
    console.log(test);
    console.log(event);
  }

  submitName(event: any){
    let ev = document.getElementById("testText");
    console.log(ev);
  }

// test

  getUserClick(ev){
    this.selectGame = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.games.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.games.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.games.forEach((game,index)=>{
    game.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title, private gameServ:GameService) {
    this.games = this.gameServ.getGames()
 
    // Set SEO
    title.setTitle('App Store');

    meta.addTags([{
        name: 'author',
        content: 'Gary'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, App store'
      },
      {
        name: 'description',
        content: 'Welcome to App store.'
      },
    ]);
    // end of SEO
  }

  ngOnInit() {}
}
