import pagenotfound from '../assets/pagenotfound.png';
import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export const NotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-y-6 my-14">
        <p className="text-7xl dark:text-white">Oops!! Page Not Found</p>
        <div className='max-w-2xl'>
          <img src={pagenotfound} alt="404 page not found" />
        </div>
        <Link to="/">
          <button className='px-3 py-2 rounded-2xl bg-gradient-to-r from-cyan-700 to-blue-700 text-white'>Back to home</button>
        </Link>
      </div>
    </main>
  )
}
