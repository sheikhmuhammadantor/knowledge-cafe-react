import PropTypes from 'prop-types';
import Blog from './Blog';

function Blogs({ data, handelBookmark, handelRead }) {
  return (
    <main className='w-2/3 mx-auto'>
      {data.map(obj => <Blog key={obj.id} obj={obj} handelBookmark={handelBookmark} handelRead={handelRead}></Blog>)}
    </main>
  )
}

Blogs.propTypes = {
  data: PropTypes.array,
  handelBookmark: PropTypes.func,
  handelRead: PropTypes.func,
}

export default Blogs
