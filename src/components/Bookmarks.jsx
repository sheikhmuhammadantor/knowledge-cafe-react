import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

function Bookmarks({data}) {
  console.log(data)
  return (
    <aside className='w-1/3 ml-6'>
      <div className='max-w-full p-2 py-5 border rounded-lg border-purple-600 text-xl text-center font-semibold text-purple-500'>
        <h2>Spent Time on Read: 177 min</h2>
      </div>
      <div className='bg-gray-800 p-4 mt-10 rounded-xl'>
        <h2 className='text-2xl font-semibold my-8 text-clip'>BookMarked Blogs: 8</h2>
      <div>
        {data.map(obj =><Bookmark key={obj.id} obj={obj}></Bookmark>)}
      </div>
      </div>
    </aside>
  )
}

Bookmarks.propTypes = {
  data: PropTypes.array
}

export default Bookmarks
