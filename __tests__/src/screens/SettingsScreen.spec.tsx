import React from 'react';
import { render, shallow } from 'react-native-testing-library';
import SettingsScreen, { SETTINGS_SCREEN_TEXT_1 } from '../../../src/screens/SettingsScreen';

describe('Settings Screen', () => {
  // snapshot
  it('shallow rendering', () => {
    const { output } = shallow(<SettingsScreen />);

    expect(output).toMatchSnapshot();
  });

  // unit
  it('renders correctly', () => {
    // const { getByTestId, queryByTestId } = render(<SettingsScreen />);
    const { getByTestId } = render(<SettingsScreen />);
    const component = getByTestId(SETTINGS_SCREEN_TEXT_1);

    expect(component.props.children).toEqual('Settings');
  });
});

