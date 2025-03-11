import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PostCocheComponent } from './components/post-coche/post-coche.component';
import { GetCocheComponent } from './components/get-coche/get-coche.component';
import { UpdateCocheComponent } from './components/update-coche/update-coche.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCocheComponent,
    GetCocheComponent,
    UpdateCocheComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
