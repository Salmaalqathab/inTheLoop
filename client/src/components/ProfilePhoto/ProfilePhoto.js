import React from "react";
import UserAvatar from "react-user-avatar";

const ProfilePhoto = props => (
    <UserAvatar 
        size="70"
        name={props.name}
        src={props.profile_pic}
    />
);

export default ProfilePhoto;

// import React from "react";
// // import UserAvatar from "react-user-avatar";

// const ProfilePhoto = props => (
//     <img src='https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png' width='70px'/>
// );

// export default ProfilePhoto;