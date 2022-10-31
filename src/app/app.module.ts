import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { ModulesComponent } from './modules/modules.component';
import { Artifacts3Component } from './artifacts3/artifacts3.component';
import { Artifacts4Component } from './artifacts4/artifacts4.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtifactsComponent,
    ModulesComponent,
    Artifacts3Component,
    Artifacts4Component,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
