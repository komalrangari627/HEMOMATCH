import React from "react";
import "./Contact.css";


const Contact = () => {


const contactDetails = [

{
icon:"📧",
title:"Email Support",
detail:"support@hemomatch.com",
description:
"Contact us for technical support, account issues, and general queries."
},


{
icon:"🚨",
title:"Emergency Help",
detail:"24/7 Blood Emergency Support",
description:
"For urgent blood requirements, connect with nearby donors and hospitals instantly through HemoMatch."
},


{
icon:"📞",
title:"Helpline",
detail:"+91 70571 57502",
description:
"Our support team is available to help users with platform-related assistance."
},


{
icon:"🏥",
title:"Hospital Partnership",
detail:"Hospital & Blood Bank Network",
description:
"Hospitals and blood banks can contact us to join the HemoMatch healthcare network."
},


{
icon:"📍",
title:"Office Location",
detail:"India",
description:
"HemoMatch operates as a digital healthcare platform connecting communities across India."
},


{
icon:"🕒",
title:"Support Hours",
detail:"24 Hours / 7 Days",
description:
"Our emergency response system is designed to provide continuous assistance."
}


];




return (


<div className="contact-page">


<div className="contact-container">





<div className="contact-header">


<h1>
📞 Contact HemoMatch
</h1>


<p>

Have questions or need assistance?
Our team is here to support your blood donation journey.

</p>


</div>









<div className="contact-grid">


{
contactDetails.map(
(item,index)=>(


<div

className="contact-card"

key={index}

>


<div className="contact-icon">

{item.icon}

</div>



<h2>

{item.title}

</h2>



<h3>

{item.detail}

</h3>



<p>

{item.description}

</p>



</div>


)

)

}


</div>







<div className="emergency-card">


<h2>
🚑 Emergency Blood Assistance
</h2>


<p>

If you need urgent blood support, use the HemoMatch
Emergency Request feature to notify nearby verified
donors, hospitals, and blood banks instantly.

</p>


<button>

Request Emergency Blood

</button>


</div>







</div>


</div>


);


};


export default Contact;