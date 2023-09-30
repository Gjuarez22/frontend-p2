import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './pages/login/login.component';

export function tokenGetter() {
  //return sessionStorage.getItem(environment.TOKEN_NAME);
  return localStorage.getItem(environment.TOKEN_NAME);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,  //la funcion(arriba) donde recupera la libreia y ese token enviarlo
        allowedDomains: ["localhost:8585"],  //validar dnnde enviariamos el token
        disallowedRoutes: ["http://localhost:8585/login/forget"], //donde no vamos a enviar el token
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
