import {Route, Switch} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
import WelcomeNewUser from "./pages/WelcomeNewUser";

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        {/*<Switch>*/}
          <Route path='/welcome' component={Welcome}>
          </Route>
            {/*<Route path='/new' component={WelcomeNewUser}/>*/}
          <Route path='/products' exact component={Products}>
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail/>
          </Route>
        {/*</Switch>*/}
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
