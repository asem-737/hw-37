import './App.css'

import { BrowserRouter, Switch } from 'react-router-dom'
import { routes } from './routes'
import { MainLayout } from './layouts/MainLayout'
import { AuthLayout } from './layouts/AuthLayout'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { About } from './pages/About'

export const App = () => {
	return (
		<div className='App' style={styles}>
			<BrowserRouter>
				<Switch>
          <AuthLayout path={routes.sign_up} component={SignUp}/>
          <MainLayout path={routes.about} component={About}/>
          <MainLayout path={routes.home} component={Home}/>
        </Switch>
			</BrowserRouter>

			{/*     
      {
        data.map((el,id) => {
           return  <RenderCard  data={el} key={id}/>
        })
      } */}

			{/* <Counter/> */}
			{/* <Calculator/> */}
		</div>
	)
}

const styles = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '1200px',
	margin: '0 auto',
	flexWrap: 'wrap',
}

