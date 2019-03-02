
import { observable } from 'mobx';
import React from 'react';
import { render, shallow } from 'react-native-testing-library';
import ProfileScreen, {
  PROFILE_SCREEN_TEXT_FIRSTNAME,
  PROFILE_SCREEN_VIEW_MAIN
} from '../../../src/screens/ProfileScreen';
// import { UserStoreType } from '../../../src/stores/UserStore';

const currentUser = {
  first_name: 'Rahim',
  photos: [{
    urls: {
      full: 'http://localhost/ok.png'
    }
  }]
};

describe('ProfileScreen', () => {
  let SessionStore: any;
  let UserStore: any;

  beforeEach(() => {
    SessionStore = observable({
      logout: jasmine.createSpy()
    });
    UserStore = observable({
      currentUser: {}
    });
  });

  it('matches snapshot of shallow rendering', () => {
    const { output } = shallow(<ProfileScreen SessionStore={SessionStore} UserStore={UserStore} />);

    expect(output).toMatchSnapshot();
  });

  it('renders the profile info correctly', () => {
    UserStore.currentUser = currentUser;

    const { getByTestId } = render(<ProfileScreen SessionStore={SessionStore} UserStore={UserStore} />);

    // the scrollview is rendered
    const profileScreenViewMain = getByTestId(PROFILE_SCREEN_VIEW_MAIN);
    expect(profileScreenViewMain).not.toBeUndefined();

    // the profile view contains the proper first name
    const profileScreenTextFirstName = getByTestId(PROFILE_SCREEN_TEXT_FIRSTNAME);
    expect(profileScreenTextFirstName.props.children).toEqual(currentUser.first_name);
  });
});

