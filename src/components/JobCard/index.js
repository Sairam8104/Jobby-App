import {Link} from 'react-router-dom'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData

  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-item">
        <div className="logo-location-container">
          <div className="logo-name-container">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="company-logo"
            />
            <div className="name-rating-container">
              <h1 className="titleH">{title}</h1>
              <div className="rating-container">
                <BsStarFill className="star-icon" />
                <p className="ratingP">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-salary-container">
            <div className="location-jobType-container">
              <div className="location-container">
                <MdLocationOn className="icon" />
                <p className="icon-names">{location}</p>
              </div>
              <div className="location-container">
                <BsFillBriefcaseFill className="icon" />
                <p className="icon-names">{employmentType}</p>
              </div>
            </div>
            <div>
              <p className="icon-names">{packagePerAnnum}</p>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div>
          <h1 className="description-heading">Description</h1>
          <p className="description">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobCard
