import HelloIndex from '../view/Hello/hello'
import LoginIndex from '../view/Login/login'
import RegisterIndex from '../view/Register/register'
import MainView from '../view/MainView/mainview'
import First from '../view/MainView/components/first'
import IndexView from '../view/MainView/components/indexview'
import RoughIndex from '../view/MainView/components/rough'
import ChartxkcdIndex from '../view/MainView/components/chartxkcd'


const routeMap = [
  {
    path: '/',
    ComponentName: HelloIndex,
    exact: true
  },
  {
    path: '/login',
    ComponentName: LoginIndex
  },
  {
    path: '/register',
    ComponentName: RegisterIndex
  },
  {
    path: '/mainview',
    ComponentName: MainView,
    routes: [
      {
        path: '/mainView',
        ComponentName: IndexView
      },
      {
        path: '/mainView/first',
        ComponentName: First
      },
      {
        path: '/mainView/rough',
        ComponentName: RoughIndex
      },
      {
        path: '/mainView/chartxkcd',
        ComponentName: ChartxkcdIndex
      }
    ]
  }
]

export default routeMap;