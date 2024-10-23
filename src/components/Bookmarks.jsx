import PropTypes from 'prop-types';
// import Bookmark from './Bookmark';

function Bookmarks() {
  return (
    <aside className='w-1/3 ml-6'>
      <div className='max-w-full p-2 border rounded-lg border-purple-600 text-xl text-center font-semibold text-purple-500'>
        <h2>Spent Time on Read : 177 min</h2>
      </div>
      <div className='bg-gray-800 p-4 mt-10 rounded-xl'>
        <h2 className='text-2xl font-semibold my-8 text-clip'>BookMarked Bloge : 8</h2>
        <h2 className='p-3 bg-[#1d232a] text-lg font-semibold '>Master Microsoft Power Platform and Become an in - Demand</h2>
      </div>
    </aside>
  )
}

Bookmarks.propTypes = {
  name: PropTypes.object
}

export default Bookmarks
