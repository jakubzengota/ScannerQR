import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import DarkmodeStack from './darkmodeStack';
import InputStack from './inputStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
  Darkmode: {
    screen: DarkmodeStack,
  },
  Input: {
    screen: InputStack,
  },
});

export default createAppContainer(RootDrawerNavigator);