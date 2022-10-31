import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members.components';
import { ListComponent } from './member-list.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { ModulesComponent } from './modules/modules.component';
import { Artifacts3Component } from './artifacts3/artifacts3.component';
import { Artifacts4Component } from './artifacts4/artifacts4.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtifactsComponent,
    ModulesComponent,
    Artifacts3Component,
    Artifacts4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
