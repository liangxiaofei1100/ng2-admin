/**
 * Created by liangxiaofei on 2017/9/8.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewComponent } from './new.component';
import { routing } from './new.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    NewComponent
  ]
})
export class NewModule {}
