import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

function Bookmarks({ bookmarks }) {
  return (
    <aside className='w-1/3 ml-6'>
      <div className='max-w-full p-2 py-5 border rounded-lg border-purple-600 text-xl text-center font-semibold text-purple-500'>
        <h2>Spent Time on Read: 177 min</h2>
      </div>
      <div className='bg-gray-800 p-4 mt-10 rounded-xl'>
        <h2 className='text-3xl font-semibold my-8 text-center text-green-500'>BookMarked Blogs: {bookmarks.length}</h2>
        <div>
          {bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)}
        </div>
      </div>
    </aside>
  )
}

Bookmarks.propTypes = {
  // data: PropTypes.array,
  bookmarks: PropTypes.array
}

export default Bookmarks
