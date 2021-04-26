import React from 'react';
import mod from "./../css/Profile.module.css"
let Profile = () => {
    return(
        <div className={mod.contentz}>

            <div>
                <img src="https://rugeroi.ru/wp-content/uploads/2016/09/prir-9890810948246387.jpg" alt=""/>
            </div>
            <div>
                <img src="https://i1.sndcdn.com/avatars-000298178722-n9s0sx-t500x500.jpg" alt=""/>
                ava + desc
            </div>
            <div>
                my post
            </div>
            <div>
                new post
            </div>
            <div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    );
}
export default Profile;