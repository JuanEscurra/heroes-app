import React, { useContext } from 'react'
import { AuthContext } from '../../Auth/AuthContext'
export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            payload: {
                name: e.target[0].value,
                password: e.target[1].value
            },
            type: 'login'
        });
        history.replace('/');
    }

    return (
        <div className="container">
            <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1 className="my-5">Heroes APP</h1>
                <form onSubmit={handleSubmit} className="w-25" style={{minWidth:300}}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Ingrese</button>
                </form>
            </div>
        </div>
    )
}
