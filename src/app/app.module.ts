import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { ResultsComponent } from './results/results.component';
import {Routes, RouterModule} from '@angular/router';
import {SearchService} from './search.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {CommonModule} from '@angular/common';
import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/index';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AboutComponent } from './about/about.component';
import { FooterNavbarComponent } from './footer-navbar/footer-navbar.component';
import { ContactComponent } from './contact/contact.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TermsComponent } from './terms/terms.component';

const appRoutes: Routes = [
  {path: 'search', component: ResultsComponent},
  {path: '', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ResultsComponent,
    NotFoundComponent,
    AdvancedsearchComponent,
    SearchBarComponent,
    AboutComponent,
    FooterNavbarComponent,
    ContactComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    Ng2Bs3ModalModule

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
