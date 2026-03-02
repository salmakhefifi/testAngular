import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListResComponent } from './list-res/list-res.component';
import { HeaderComponent } from './header/header.component';
import { AddResComponent } from './add-res/add-res.component';
import { DetailsResComponent } from './details-res/details-res.component';
import { UpdateResComponent } from './update-res/update-res.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListResComponent,
    HeaderComponent,
    AddResComponent,
    DetailsResComponent,
    UpdateResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
