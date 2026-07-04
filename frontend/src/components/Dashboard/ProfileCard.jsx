import {
FaUserCircle,
FaEnvelope,
FaPhone,
FaMapMarkerAlt
} from "react-icons/fa";

function ProfileCard(){

return(

<div className="dashboard-panel">

<div className="profile-card">

<FaUserCircle className="profile-avatar"/>

<h2>Komal Rangari</h2>

<p>Blood Donor</p>

<div className="profile-info">

<p>

<FaEnvelope/>

komal@example.com

</p>

<p>

<FaPhone/>

7057157502

</p>

<p>

<FaMapMarkerAlt/>

Amravati, Maharashtra

</p>

</div>

<button className="register-btn">

Edit Profile

</button>

</div>

</div>

);

}

export default ProfileCard;