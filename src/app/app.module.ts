import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import { UserModule } from './Modules/User/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//services
import { AuthenticationService } from './core/services/authentication.service';
import { HomepageService } from './core/services/homepage.service';
import { AuthService } from './core/services/auth.service';
import { UserPreferencesService} from './core/services/user-preferences.service'

//Interceptors
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';
// import { VideojsComponent } from './core/shared/videojs/videojs.component';

//videogular
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VgStreamingModule } from '@videogular/ngx-videogular/streaming';

import { HeaderComponent } from './core/shared/header/header.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { ModalsComponent } from './core/shared/modals/modals.component';
// import { VideoPlayerComponent } from './core/shared/video-player/video-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AutocompleteComponent } from './core/shared/autocomplete/autocomplete.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonComponent } from './core/shared/skeleton/skeleton.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderCompComponent } from './core/shared/loader-comp/loader-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalsComponent,
    AutocompleteComponent,
    SkeletonComponent,
    LoaderCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    AutocompleteLibModule,
    NgxSkeletonLoaderModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule,
    NgxSpinnerModule
  ],
  providers: [AuthenticationService, HomepageService, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
