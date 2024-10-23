import PropTypes from 'prop-types';
import Blog from './Blog';

function Blogs({ data }) {
  return (
    <main className='w-2/3 mx-auto'>
      {data.map(obj => <Blog key={obj.id} obj={obj}></Blog>)}
    </main>
  )
}

Blogs.propTypes = {
  data: PropTypes.array
}

export default Blogs
