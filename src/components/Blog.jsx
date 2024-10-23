import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

function Blog({ obj, handelBookmark }) {
  const { bannerImage, profileImage, fullName, postedDate, readingTime, title, hashtags } = obj;
  return (
    <div className='max-w-3xl space-y-5 mx-auto mb-10 border rounded-md p-6 bg-black pb-12'>
      <img className='rounded-md w-full max-h-80 object-cover' src={bannerImage} alt="" />
      <div className='flex justify-between'>
        <div className='flex gap-5'>
          <img className='h-14 w-14 object-cover rounded-full ring ring-green-500 cursor-pointer' src={profileImage} alt={`${fullName} Profile Image`} />
          <div>
            <h3 className='text-xl font-semibold text-cyan-600 cursor-pointer'>{fullName}</h3>
            <p className="text-orange-600">{postedDate}</p>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <p>{readingTime} min Read</p>
          <i onClick={() => handelBookmark(obj)} className="text-3xl text-red-600 cursor-pointer"><CiBookmark /></i>
        </div>
      </div>
      <h2 className='text-3xl font-semibold text-blue-600 cursor-pointer'>{title}</h2>
      <div className='flex gap-4'>
        {hashtags.map((tag, idx) => <p key={idx} className="underline cursor-pointer">{tag}</p>)}
      </div>
      <button className='btn text-base btn-primary font-bold' href="#">Mark as Read</button>
    </div>
  )
}

Blog.propTypes = {
  obj: PropTypes.object,
  handelBookmark: PropTypes.func,
}

export default Blog
