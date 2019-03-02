import { action, observable, reaction } from 'mobx';
import AsyncStorageService from '../services/AsyncStorageService';
class CommonStore {
  @observable public appName: string = 'BoilerPlate';
  @observable public token: string|undefined = undefined;
  @observable public userId: string|undefined = undefined;
  @observable public hasSeenOnboarding: boolean = false;
  @observable public appLoaded: boolean = false;
  @observable public version: string|undefined = undefined;

  @observable public tags: Array<string> = [];
  @observable public isLoadingTags: boolean = false;

  private asyncStorageService: AsyncStorageService = new AsyncStorageService();

  constructor() {
    const pckg = require('../../package.json');
    this.version = pckg.version;

    this.asyncStorageService.retrieveData('token')
      .then((token: string | undefined) => { this.token = token; })
      .catch((err: any) => console.warn(err));
    this.asyncStorageService.retrieveData('userId')
      .then((userId: string | undefined) => { this.userId = userId; })
      .catch((err: any) => console.warn(err));
    this.asyncStorageService.retrieveData('hasSeenOnboarding')
      .then((hasSeenOnboarding: boolean) => { this.hasSeenOnboarding = hasSeenOnboarding; })
      .catch((err: any) => console.warn(err));
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          void this.asyncStorageService.storeData('token', token);
        } else {
          void this.asyncStorageService.clearData('token');
        }
      }
    );
    reaction(
      () => this.userId,
      (userId) => {
        if (userId) {
          void this.asyncStorageService.storeData('userId', userId);
        } else {
          void this.asyncStorageService.clearData('userId');
        }
      }
    );
    reaction(
      () => this.hasSeenOnboarding,
      (hasSeenOnboarding) => {
        if (hasSeenOnboarding) {
          void this.asyncStorageService.storeData('hasSeenOnboarding', hasSeenOnboarding);
        } else {
          void this.asyncStorageService.clearData('hasSeenOnboarding');
        }
      }
    );
  }

  @action public setToken(token: string|undefined): void {
    this.token = token;
  }

  @action public setUserId(userId: string|undefined): void {
    this.userId = userId;
  }

  // you can only store strings in async storage
  // https://facebook.github.io/react-native/docs/asyncstorage.html#content
  @action public setHasSeenOnboarding(hasSeenOnboarding: boolean): void {
    this.hasSeenOnboarding = hasSeenOnboarding;
  }

  @action public setAppLoaded(): void {
    this.appLoaded = true;
  }

}

export default new CommonStore();
