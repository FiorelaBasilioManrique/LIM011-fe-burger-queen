import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './components/header/header.component';
import { MenuLinksComponent } from './components/menu-links/menu-links.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CustomerRequestComponent } from './components/customer-request/customer-request.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLinksComponent,
    MenuListComponent,
    CustomerRequestComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
