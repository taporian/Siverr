import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  signOutAdmin } from "../redux/action-creators";
import { useHistory } from "react-router-dom";

export default function AdminHome() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentAdmin } = useSelector((state) => state.authenticationReducer);

    const handleSignOut = () => {
        dispatch(signOutAdmin(history));
      };
    return (
        <div>
            ADMIN HOME
            <button onClick={handleSignOut}> {currentAdmin} SIGN OUT</button>
        </div>
    )
}
