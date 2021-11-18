import React from 'react'


function CharacterSidebar({name, friends, description, setShow}) {

    const handleClick = () => {
        setShow(false)
    }

    return (
        <div  className ="sidebar col-4" data-spy="scroll">
            <button onClick={handleClick}>close</button>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <span>Planet <strong>Alpha</strong></span>
                {/* <span>Friends <strong>{friends}</strong></span> */}
            </div>


{
    // console.log(friends)
    friends.map(f => {
        return             <div className="d-flex flex-row p-3" key={f.name}>
        <img src={f.image} alt="" width="70px" height="70px" className="rounded-circle p-2"/>
        <div>
            <strong>{f.name}</strong>
            <p>{friends.length} Friends</p>
        </div>
    </div>
    })
}

        </div>
    )
}

export default CharacterSidebar
