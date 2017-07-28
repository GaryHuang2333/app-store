import { Injectable } from "@angular/core";

@Injectable()
export class GameService{
    isLogined:boolean = false;
    games: Array < any > = [{
      'id': 1,
     'name':'王者荣耀',
     'platform':'IOS',
     'review':'23552',
     'rating':'4.5',
    },
    {
      'id': 2,
     'name':'阴阳师',
     'platform':'Android',
     'review':'226',
     'rating':'4.5',
    },
    {
      'id': 3,
     'name':'纪念碑谷2',
     'platform':'IOS',
     'review':'1634',
     'rating':'5',
    },
    {
      'id': 4,
     'name':'NBA 2K17',
     'platform':'IOS',
     'review':'832',
     'rating':'2.5',
    },
    {
      'id': 5,
     'name':'Doodle Jump',
     'platform':'Android',
     'review':'185',
     'rating':'4.5',
    },
    {
      'id': 6,
     'name':'Lit the Torch',
     'platform':'Android',
     'review':'521',
     'rating':'5',
    },
    {
      'id': 7,
     'name':'Don`t Stop - Eighth Note',
     'platform':'Android',
     'review':'212',
     'rating':'4',
    },
    {
      'id': 8,
     'name':'Soul Knight',
     'platform':'Android',
     'review':'496',
     'ratings':'4',
    }
  ];

    constructor(){

    }
    delete(obj){
        let id = obj.id
        this.games.forEach((item,index,array)=>{
        if(item.id == id){
            array.splice(index,1)
        }
        })
    }
    search(type,value){
        this.games.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.games.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }
    getGames(){
        return this.games;
    }

}

