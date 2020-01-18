import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator
        ({
            Main: {
                screen: Main,
                navigationOptions: {
                    title: 'DevRadar',
                }
            },
            Profile: {
                screen: Profile,
                navigationOptions: {
                    title: 'Profile'
                }
            }
        },
            {
                defaultNavigationOptions: {
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#0c6e50'
                    }
                }
            }
        )
)

export default Routes
