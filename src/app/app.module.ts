import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { SectionComponent } from './components/section/section.component';
import { SkillComponent } from './components/skill/skill.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavegacionComponent,
    SectionComponent,
    SkillComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
