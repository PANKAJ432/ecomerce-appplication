import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './authentication/auth.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/main-layout/header/header.component';
import { SidebarComponent } from './layout/main-layout/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
// import { ButtonComponent } from './shared/common-component/button/button.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    ToastModule,
    ButtonModule,ToolbarModule,AvatarGroupModule,AvatarModule,SharedModule,
    
  ],
  providers: [MessageService],

  bootstrap: [AppComponent]
})
export class AppModule { }
