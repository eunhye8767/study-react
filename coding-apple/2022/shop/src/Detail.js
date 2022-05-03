import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Detail.scss';

const Detail = ({shoes, inventory, setInventory}) => {
    
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setAlert(false)
        }, 5000);
        return () => clearTimeout(timer);
    }, [])

    const navigate = useNavigate();
    const [alert, setAlert] = useState(true);
    const [input, setInput] = useState('');

    let { id } = useParams();
    let curr = shoes.find((data) => data.id === Number(id))

    return (
        <div className="container">
            <input onChange={ (e) => { setInput(e.target.value) } } />
            {
                (alert)
                ? ( <div className="my-alert">
                        <p>재고가 얼마 남지 않았습니다</p>
                    </div>)
                : null
            }

            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{ curr.title }</h4>
                <p>{ curr.content }</p>
                <p>{ curr.price }</p>

                <Info inventory={inventory[curr.id]} />

                <button 
                    className="btn btn-danger"
                    onClick={ () => {
                        const number = curr.id;
                        let basic = [...inventory];
                        basic[number] = basic[number] - 1; 
                        console.log(basic);
                        setInventory(basic);
                    }}>주문하기</button> 
                <button 
                    className="btn btn-danger"
                    onClick={ () => { navigate(-1) } }
                    >뒤로가기</button> 
                </div>
            </div>
        </div> 
    );
}

function Info({inventory}) {
    return (
        <p>재고 : {inventory}</p>
    )
}
 
export default Detail;