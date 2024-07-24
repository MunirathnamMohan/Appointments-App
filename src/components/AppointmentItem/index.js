import './index.css'

const AppointmentItem=(props)=>{
    const{eachItem,onStarImageToggle}=props
    const{id,title,date,isClicked}=eachItem
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const onTouchedStarImg=()=>{
        onStarImageToggle(id)
    }
    const slectedStarImage=isClicked?"https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png" :"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
    return(
        <li className='list-con'>
            <div className='con'>
                <p className='title-below'>{title}</p>
                <img src={slectedStarImage} onClick={onTouchedStarImg} className='star-img'/>
            </div>
            <p className='date-in-below'>Date: {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${days[date.getDay()]}`}</p>
        </li>
    )
}

export default AppointmentItem