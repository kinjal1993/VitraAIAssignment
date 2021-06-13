import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import FriendsList from "./FriendsList";
import axios from 'axios';
import { PEOPLE_SEARCH_URL } from '../urls';

const Page2 = (props) => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const params = {
            balanceMax: 2000,
            isActive: false
        };

        axios.get(PEOPLE_SEARCH_URL, {
            params: params
        }).then(response => response.data)
            .then(result => setPeople(result.data))
            .catch(error => setPeople([]));

    }, [])

    return (
        <div>
            <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                Non active people with balance less than $2000
            </Typography>
            <FriendsList people={people}></FriendsList>
        </div>
    );
}

export default Page2;
