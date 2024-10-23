import PropTypes from 'prop-types'

export default function Bookmark({ bookmark }) {
  return (
    <div className='mb-3'>
      <h2 className='p-5 rounded-lg bg-[#1d232a] text-2xl font-semibold '>{bookmark.title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.object
}
