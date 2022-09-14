import styles from './Profile.module.css'
import Heading from '../../../Components/Heading/Heading'
import Paragraph from '../../../Components/Paragraph/Paragraph'

import { useSelector } from 'react-redux'

const Profile = () =>{
    const about=useSelector((state) => state.personalDetails.about)
    return (
        <>
            <Heading value="Profile"></Heading>
            <Paragraph value={about}></Paragraph>
        </>
    )
}

export default Profile