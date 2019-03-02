import Config from 'react-native-config';
import * as _superagent from 'superagent';
import superagentPromise from 'superagent-promise';
import CommonStore from './stores/CommonStore';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = Config.SERVER_URL;
/* const handleErrors = async (err: any) => {
  if (err && err.response && err.response.status === 401) {
    try {
      await SessionStore.logout();
    } catch (error) {
      console.warn(error);
    }
  }
  return err;
}; */

const returnResponse = (res: any) => res;

const tokenPlugin = (req: any) => {
  if (CommonStore.token) {
    req.set('X-User-Authentication-Token', `${CommonStore.token}`);
    req.set('X-User-Id', `${CommonStore.userId}`);
  }
};

const requests = {
  del: (url: string) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end()
      .then(returnResponse),
  get: (url: string) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end()
      .then(returnResponse),
  put: (url: string, body: any) =>
    superagent
      .put(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .send(body)
      .end()
      .then(returnResponse),
  post: (url: string, body: any) =>
    superagent
      .post(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .send(body)
      .end()
      .then(returnResponse)
};

export default { requests };
