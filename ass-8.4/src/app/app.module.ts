import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { DropDownService } from 'app/service/drop-down.service';
import { LoggerService } from 'app/service/logger.service';
// this module is provided by the clI
@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DropDownService, LoggerService],
  bootstrap: [RootComponent]
})
export class AppModule { }
