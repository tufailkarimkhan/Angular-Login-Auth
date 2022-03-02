import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth/auth.guard';
import {TokenInterceptorService} from './interceptor/token-interceptor.service'
import { JwtHelperService } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SpecialEventsComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [AuthService,AuthGuard,EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
