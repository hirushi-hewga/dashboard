import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useContext } from 'react';
import { AuthContext } from '../../components/poviders/AuthProvider';
import { defaultAvatarUrl } from '../../settings/urls';
import { Button } from '@mui/material';

const ProfilePage = () => {
    const { auth, login } = useContext(AuthContext)

    const editAvatar = () => {
        const url = document.getElementById("imageField").value
        if (url) {
            const updatedUser = {...auth, image: url}
            localStorage.setItem("auth", JSON.stringify(updatedUser))
            login()
            const localData = localStorage.getItem("users")
            if (localData) {
                const users = JSON.parse(localData)
                const index = users.findIndex(u => u.id == auth.id)
                if (index != -1) {
                    users[index].image = url
                }
                localStorage.setItem("users", JSON.stringify(users))
            }
        }
    }

    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-4 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src={auth.image ? auth.image : defaultAvatarUrl}/>
                        <span className="font-weight-bold">{auth.firstName} {auth.lastName}</span>
                        <span class="text-black-50">{auth.email}</span>
                        <input id="imageField" placeholder='image url'/>
                        <Button variant='contained' onClick={editAvatar}>Save</Button>
                    </div>
                </div>
                <div className="col-md-7 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div class="row mt-2">
                            <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="First name" value=""/></div>
                            <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="Last name"/></div>
                        </div>
                        <div class="row mt-3">
                            <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="Phone number" value=""/></div>
                        </div>
                        {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage