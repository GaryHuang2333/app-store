import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { GameListComponent } from './game-list/game-list.component';
import { GameItemComponent } from './game-item/game-item.component';
import { GameEditComponent } from './game-edit/game-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { GameService } from './game.service'

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: GameListComponent, pathMatch: 'full' },
      { path: 'game/edit/:sid', component: GameEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   GameListComponent,
   GameItemComponent, 
   GameEditComponent
   ],
   providers:[GameService]
})
export class GameModule { }
