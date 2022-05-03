import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../_actions/user_action';


export default function (SpecificComponent, option, adminRoute = null) {

    // option - null  => 아무나 출입이 가능한 페이지
    // option - true  => 로그인한 유저만 출입이 가능한 페이지
    // option - false => 로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();
        let navigate = useNavigate();

        useEffect(() => {  // 페이지에 접근할 때마다 실행되서 권한을 확인할 수 있도록 함

            // 원래는 axios.get('api/users/auth')
            dispatch(auth()).then(response => { // auth 액션함수가 반환하는 값(=reducer에게 전달될 값)
                // 백엔드에서 처리해서 가져온 정보
                console.log(response)

                // 로그인하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        navigate('/login')
                    }
                } else {
                    //로그인한 상태
                    //adminRoute에 접근하려는데 admin이 아닌 경우
                    if(adminRoute && !response.payload.isAdmin) {navigate("/")}
                    else {
                        //option이 false일 때, login page or register page
                        //로그인한 유저는 출입불가인 페이지에 접근할떄
                        if(option === false){navigate('/')}
                    }
                }
            })
            
        }, [])

        return (
            <SpecificComponent />
        )
    }

    return (
        <AuthenticationCheck />
    )
}