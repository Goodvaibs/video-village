import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ConfirmotpModule } from './confirmotp/confirmotp.module';


import { VerifyOtpModule } from './verify-otp/verify-otp.module';
import {InformationToUserModule} from './information-to-user/information-to-user.module';
import {FeedbackModule} from './feedback/feedback.module';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { SeriesDetailsModule } from './series-details/series-details.module';
import { HorizontalGalleryModule } from './horizontal-gallery/horizontal-gallery.module';
import { VideojsComponent } from './../../core/shared/videojs/videojs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SelectedLangComponent } from './selected-lang/selected-lang.component';
import { SignInGetStartedComponent } from './sign-in-get-started/sign-in-get-started.component'

@NgModule({
  declarations: [ContactUsComponent, SelectedLangComponent, SignInGetStartedComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HomeModule,
    LoginModule,
    ConfirmotpModule,
    VerifyOtpModule,
    InformationToUserModule,
    FeedbackModule,
    MovieDetailsModule,
    SeriesDetailsModule,
    HorizontalGalleryModule
  ]
})
export class UserModule { }
