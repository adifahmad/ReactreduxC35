import './style.css'
import axios from 'axios'

function AvatarImage({photos}) {
    return <img src={`/${photos}`} alt="logo" className="Avatar" />
}

export default function UserItemComponent() {

    const Data = [
        {name : "Adif", phone: "08213132112132131", avatar: 'usertie.png'},
        {name : "Ada", phone: "08121372113231321", avatar: 'usertie.png'},
        {name : "Syahroni", phone: "087311213231213", avatar: 'Pisang.jpg'},
        {name : "Sakura", phone: "082913931312319", avatar: 'Bakso_mi_bihun.jpg'},
        {name : "Minyakwangi", phone: "0928123213", avatar: 'spongebob-jellyfish-background-13.png'},
        {name : "Kagura", phone: "81313923121", avatar: 'usertie.png'},
        {name : "Selow", phone: "9201310312121", avatar: 'usertie.png'},
        {name : "Postman", phone: "081213112213", avatar: 'usertie.png'},
        {name : "Yachine", phone: "07281323231123", avatar: 'usertie.png'},
        {name : "Dunia", phone: "012131323121", avatar: 'usertie.png'},
        {name : "Rohim", phone: "0172131323113", avatar: 'usertie.png'},
    ]

    const result = []

    return(
    <div className="itemCardContainer">
    {Data.map((user) => {
        return (
        <>
        <div className="itemContainer"> 
            <div className='avatarContainer'>
                <AvatarImage photos={user.avatar} />
            </div>
            <div className='formContainer'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
                <p>{user.name}</p>
                <p>{user.phone}</p>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            {result}
        </div>
        </>
        );
    })}
    </div>
    )
    
    
}