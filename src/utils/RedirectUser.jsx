import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const RedirectUser = () => {
    const user = useSelector((state) => state.auth)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const next = searchParams.get('next') || ""
    const navigate = useNavigate()
    console.log(user.user_infos);


    useEffect(() => {
        if (user.isLogin) {
            if (user.user_infos.is_superuser) {
                navigate('/admin')
            }
            else if (user.user_infos.rule === 'Chef de délégation') {
                navigate('/team-manager')
            }
        }
        else {
            navigate('/login')
        }
    }, [user, navigate])

    const path = location.pathname;
    return (
        <div>

        </div>
    )
}

export default RedirectUser