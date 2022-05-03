import React from "react";
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";

const Cart = (props) => {
    return ( 
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((ele, i)=>{
                            return (
                                <tr key={i}>
                                    <td>{ ele.id }</td>
                                    <td>{ ele.name }</td>
                                    <td>{ ele.quan }</td>
                                    <td>
                                        <button onClick={ () => {
                                            props.dispatch({type: 'plus', index : i})
                                        }}>+</button>
                                        <button onClick={ () => {
                                            props.dispatch({type: 'minus', index : i} )
                                        }}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

const storeState = (state) => {
    return {
        state : state
    }
}
 
export default connect(storeState)(Cart);

// export default Cart;