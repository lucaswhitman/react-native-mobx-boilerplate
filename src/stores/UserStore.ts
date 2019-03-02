import { action, observable } from 'mobx';
import agent from '../agent';
import CommonStore from './CommonStore';

const BASE_PATH = '/users/';

interface IUser {
  segments: Array<string>;
}

class UserStore {
  @observable public currentUser: IUser|undefined = undefined;
  @observable public loadingUser: boolean = false;
  @observable public updatingUser: boolean = false;
  @observable public updatingUserErrors: any  = undefined;

  @observable public error: any = undefined;

  @action public pullUser(): Promise<any> {
    this.loadingUser = true;
    return agent.requests.get(BASE_PATH + CommonStore.userId)
      .then((response: any) => {
        this.currentUser = response.body;
      })
      .catch(((err: any) => {
        this.error = err.response && err.response.body && err.response.body.error;
        throw err;
      }))
      .finally(action(() => {
        this.loadingUser = false;
      }));
  }

  //todo
  @action public updateUser(user: any): Promise<any> {
    this.updatingUser = true;
    return agent.requests.put(BASE_PATH, { user })
      .then(() => {
        this.currentUser = user;
      })
      .finally(action(() => { this.updatingUser = false; }));
  }

  @action public forgetUser(): void {
    this.currentUser = undefined;
  }

  @action public inSegment(segment: string): boolean {
    if (this.currentUser && this.currentUser['segments']) {
      return this.currentUser['segments'].includes(segment);
    }
    return false;
  }
}

export default new UserStore();
