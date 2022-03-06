import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from 'src/app/core/guard/auth-guard.guard';
import { HeaderComponent } from 'src/app/core/shared/header/header.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeaderComponent,
    // canActivate: [AuthGuardGuard],
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'about',
    component: HeaderComponent,
    // canActivate: [AuthGuardGuard],
    loadChildren: () =>
      import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'confirm-otp/:id',
    loadChildren: () =>
      import('./confirmotp/confirmotp.module').then(m => m.ConfirmotpModule)
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./login/login.module').then(m => m.LoginModule)
  // },
  {
    path: 'subs',
    loadChildren: () =>
      import('./subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: 'profile',
    component: HeaderComponent,
    loadChildren: () =>
      import('./my-profile/my-profile.module').then(m => m.MyProfileModule)
  },
  {
    path: 'verifyotp',
    loadChildren: () =>
      import('./verify-otp/verify-otp.module').then(m => m.VerifyOtpModule)
  },
  {
    path: 'info',
    component: HeaderComponent,
    loadChildren: () =>
      import('./information-to-user/information-to-user.module').then(m => m.InformationToUserModule)
  },
  {
    path: 'feedback',
    component: HeaderComponent,
    loadChildren: () =>
      import('./feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: 'gallery',
    component: HeaderComponent,
    loadChildren: () =>
      import('./horizontal-gallery/horizontal-gallery.module').then(m => m.HorizontalGalleryModule)
  },
  {
    path: 'movies-details/:id/:id2',
    component: HeaderComponent,
    loadChildren: () =>
      import('./movie-details/movie-details.module').then(m => m.MovieDetailsModule)
  },
  {
    path: 'series/:id',
    component: HeaderComponent,
    loadChildren: () =>
      import('./series-details/series-details.module').then(m => m.SeriesDetailsModule)
  },
  {
    path: 'gallery',
    component: HeaderComponent,
    loadChildren: () =>
      import('./horizontal-gallery/horizontal-gallery.module').then(m => m.HorizontalGalleryModule)
  }
  ,
  {
    path: 'contact',
    component: HeaderComponent,
    loadChildren: () =>
      import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'more-like-this/:id',
    component: HeaderComponent,
    loadChildren:() =>
    import('./more-like-this/more-like-this.module').then(m => m.MoreLikeThisModule)
  },
  {
    path: 'terms',
    component: HeaderComponent,
    loadChildren:() =>
    import('./terms-privacy/terms-privacy.module').then(m => m.TermsPrivacyModule)
  },
  {
    path: 'kids',
    component: HeaderComponent,
    loadChildren:() =>
    import('./kids/kids.module').then(m => m.KidsModule)
  },
  {
    path: 'series',
    component: HeaderComponent,
    loadChildren:() =>
    import('./series/series.module').then(m => m.SeriesModule)
  },
  {
    path: 'shorts',
    component: HeaderComponent,
    loadChildren:() =>
    import('./shorts/shorts.module').then(m => m.ShortsModule)
  },
  {
    path: 'selected-lang',
    component: HeaderComponent,
    loadChildren:() =>
    import('./selected-lang/selected-lang.module').then(m => m.SelectedLangModule)
  },
  {
    path: 'movies',
    component: HeaderComponent,
    loadChildren:() =>
    import('./movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'getStarted',
    component: HeaderComponent,
    loadChildren:() =>
    import('./sign-in-get-started/sign-in-get-started.module').then(m => m.SignInGetStartedModule)
  },
  {
    path: 'personal',
    component: HeaderComponent,
    loadChildren:() =>
    import('./personal-details/personal-details.module').then(m => m.PersonalDetailsModule)
  },
  {
    path: 'header',
    loadChildren:() =>
    import('./header/header.module').then(m => m.HeaderModule)
  },
  {
    path: 'footer',
    loadChildren:() =>
    import('./footer/footer.module').then(m => m.FooterModule)
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
