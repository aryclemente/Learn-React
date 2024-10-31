import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function XFollowCard ({ children, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'x-followCard-button is-following' : 'x-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)

    }
    console.log(userName)
    return(
        <>
            <article className='x-followCard'>
                <header className='x-followCard-header'>
                <img className='x-followCard-avatar' alt="avatar"  src={`https://unavatar.io/${userName}`} />
                <h4 className="x-followCard-info">
                    <strong> {children} </strong>
                    <span className="x-followCard-infoUserName"> @{userName}</span>
                </h4>
                </header>
                <aside>
                    <button   className={buttonClassName} onClick={handleClick}>
                        <span className='x-followCard-text'>{text}</span>
                        <span className='x-followCard-stopFollow'>Dejar de seguir</span>

                    </button>
                </aside>
            </article>
        </>
    )
}


