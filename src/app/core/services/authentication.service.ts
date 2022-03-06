import { Injectable } from '@angular/core';
// import { Auth } from 'aws-amplify';
import  Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject } from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //Storage variable
  private currentUserSubject;

  //aws variables
  toVerifyEmail = false;
  signstatus;

  public loggedIn: boolean;

  private _authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();
  authState: Observable<CognitoUser|any> = this._authState.asObservable();

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';
  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  constructor(
    private auth1service: AuthService
  ) {
    console.log(this.currentUserSubject);
    Hub.listen('auth',(data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this._authState.next(payload.event);
      }
    });
  }

  public get currentUserValue() {
    return this.currentUserSubject = JSON.parse(localStorage.getItem('currentUser'));
  }

  signIn(user) {
    return Auth.signIn(user).then(user => {
      console.log(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject = user;
      user.getCachedDeviceKeyAndPassword();
      user.setDeviceStatusRemembered({
        onSuccess: function (result) {
          // let abc = user.getDevice();
          // console.log(abc);
        //   user.listDevices({
        //     onSuccess: function (result) {

        //         console.log(result);
        //     },
        //     onFailure: function(err) {
        //         console.log(err);
        //     }
        // });
        user.listDevices(50, null, {
          onSuccess: function (result) {
              console.log(result);
          },
          onFailure: function(err) {
              console.log(err);
          }
      });
            console.log('call result: ' + result);
        },

        onFailure: function(err) {
            console.log(err);
        }
      });
      return user;
    }).catch(err => {
      console.log(err);
      return err;
    }
    );
  }

  register(user) {
    return Auth.signUp(user).then(data => {
            console.log(data);
            // localStorage.setItem('currentUser', JSON.stringify(data.user));
            this.toVerifyEmail = true;
            this.signstatus = '';
            return data;
          })
          .catch(err => {
            console.log(err);
            return err;
          });
  }

  confirmUser(userName, verifycode) {
    return Auth.confirmSignUp(userName, verifycode,
      {forceAliasCreation: true}).then(data => {
            console.log(data)
            this.toVerifyEmail = false;
            this.signstatus = 'signin'
            return data;
         })
           .catch(err => {
            console.log(err);
            return err;
           });
  }

  socialSignIn(provider:CognitoHostedUIIdentityProvider): Promise<ICredentials> {
    console.log("hello");
    return Auth.federatedSignIn({
      'provider': provider
    });
  }

  signOut(): Promise<any> {
    return Auth.signOut()
      .then(() => this.loggedIn = false)
  }

  getCreds() {
    return Auth.currentSession();
  }

  currentUserInfo() {
    return Auth.currentUserInfo();
  }

  getUserInfoFromStorage() {
     let user = JSON.parse(localStorage.getItem("currentUser"));
     return user;
  }

}
