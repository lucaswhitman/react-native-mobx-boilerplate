import { action, observable } from 'mobx';

import agent from '../agent';
import CommonStore from './CommonStore';
import UserStore from './UserStore';

const BASE_PATH = '/sessions/';
class SessionStore {
  @observable public inProgress: boolean = false;
  @observable public error: any = null;
  @observable public email: string = '';
  @observable public password: string = '';

  @observable public isLoggedIn: boolean = false;

  @action public setEmail(email: string): void {
    this.email = email;
  }

  @action public setPassword(password: string): void {
    this.password = password;
  }

  @action public setLoggedIn(): void {
    this.isLoggedIn = true;
  }

  @action public reset(): void {
    this.email = '';
    this.password = '';
  }

  @action public login(): Promise<any> {
    this.inProgress = true;
    this.error = null;
    return agent.requests.post(BASE_PATH, { email: this.email, password: this.password })
      .then(async (response: any) => {
        CommonStore.setToken(response.headers['x-user-authentication-token']);
        CommonStore.setUserId(response.headers['x-user-id']);
        this.isLoggedIn = true;
        return UserStore.pullUser();
      })
      .catch(action((err: any) => {
        this.error = err.response && err.response.body && err.response.body.error;
        this.isLoggedIn = false;
        throw err;
      }))
      .finally(action(() => {
        this.inProgress = false;
      }));
  }

  @action public resetPassword(): Promise<any> {
    this.inProgress = true;
    this.error = null;
    return agent.requests.post('/password_resets/', { email: this.email })
      .catch(action((err: any) => {
        this.error = err.response && err.response.body && err.response.body.error;
        throw err;
      }))
      .finally(action(() => {
        this.inProgress = false;
      }));
  }

  @action public hasValidToken(): boolean {
    if(CommonStore.token) {
      agent.requests.get(`${BASE_PATH}${CommonStore.userId}?token=${CommonStore.token}`)
      .then(async (response: any) => {
        this.isLoggedIn = response.body;
        return UserStore.pullUser();
      })
      .catch(action((err: any) => {
        console.log(err);
        return false;
      }));
    }
    return (this.isLoggedIn);
  }

  /* not yet implemented
  @action register() {
    this.inProgress = true;
    this.errors = undefined;
    return agent.Auth.register(this.email, this.password)
      .then(( response ) => {
        CommonStore.setToken(response.headers["x-user-authentication-token"]);
        CommonStore.setUserId(response.headers["x-user-id"]);
      })
      .then(() => {
        UserStore.pullUser()
      })
      .catch(action((err) => {
        this.error = err.response && err.response.body && err.response.body.error;
        throw err;
      }))
      .finally(action(() => {
        this.inProgress = false;
        this.isLoggedIn = true;
      }));
  }

  */

  @action public logout(): Promise<void> {
    this.isLoggedIn = false;
    CommonStore.setToken(undefined);
    CommonStore.setUserId(undefined);
    UserStore.forgetUser();
    return Promise.resolve();
  }
}

export default new SessionStore();
