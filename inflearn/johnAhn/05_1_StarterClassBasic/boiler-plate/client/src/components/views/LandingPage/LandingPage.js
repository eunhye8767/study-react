import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';

function LandingPage() {
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response.data))
        
        axios.get('/api/users/auth')
            .then(response => {
                console.log(response.data);
                setbtnlogout(response.data.isAuth)
            })
    }, [])

    const [btnlogout, setbtnlogout] = useState(false)

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                // console.log(response.data)
                if(response.data.success) {
                    navigate("/login")
                } else {
                    alert('로그아웃 하는데 실패 했습니다.')
                }
            })
    }

    let navigate = useNavigate();

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
            width: '100%', height: '100vh'
        }}>
            <h2>시작페이지</h2>
            {
                (btnlogout === true) 
                ? <button onClick={onClickHandler}>로그아웃</button> : <Link to="/login">로그인</Link>
            }
        </div>
    )
}

export default LandingPage
