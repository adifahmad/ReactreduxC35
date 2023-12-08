import { useState } from 'react'
import './style.css'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { updateAvatar } from '../actions/users'


function ButtonSave({save}) {
    return <button type="submit" className="buttonSave" onClick={save}>Save</button>
}

function CancelButton() {
    return <a className='cancelButton'><i class="fa-solid fa-xmark"></i></a>
}

export default function Avatar() {
    const location = useLocation();
    const { user } = location.state;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [avatar, setUpdateAvatar] = useState({0 : ''})

    var formData = new FormData();
    formData.append("avatar", avatar[0]);


    return (
        <>
            <div className='addContainer'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>

                <Link to="/"><CancelButton /></Link>

                <div className="formAvatar">
                    <label for="avatar" className="labelAvatar">Pilih Avatar</label>
                    <div className="inputAvatar">
                        <input type="file" name="avatar" class="form-control" accept="image/*" id="imgInp" onChange={(e) => (setUpdateAvatar(e.target.files))} />
                    </div>
                </div>
                <div className='addButtonContainer'>
                    <ButtonSave save={() => {
                        dispatch(updateAvatar({
                            id: user.id, avatar: formData
                        })); navigate('/')
                    }} />
                </div>
            </div>
        </>
    )
}