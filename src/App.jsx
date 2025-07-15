import './App.css';
import { Header,Footer,Card } from './components';
import { AllRoutes } from './Route/AllRoutes';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
        <div className="dark:bg-gray-800">
          <Header />
          <AllRoutes />
          <Footer />
        </div>
  )
}


