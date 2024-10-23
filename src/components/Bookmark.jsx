import PropTypes from 'prop-types'

export default function Bookmark({obj}) {
// const {id} = obj
// console.log(id);
  return (
    <div className='mb-3'>
      <h2 className='p-5 rounded-lg bg-[#1d232a] text-2xl font-semibold '>{obj?.title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
  obj: PropTypes.object
}
