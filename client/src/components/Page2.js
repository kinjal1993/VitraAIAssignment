import React, { useState, useEffect } from "react";
import PeopleList from "./PeopleList";
const axios = require('axios');

const Page2 = (props) => {
    const [people, setPeople] = useState([])
    
    useEffect(() => {
        const filters = {
            balanceRange: [-1,2000],
            isActive : false
        };

        const data = JSON.stringify({ "filters" : filters });

        const config = {
            method: 'get',
            url: 'http://localhost:5000/people/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setPeople(response.data.data)
            })
            .catch(function (error) {
                setPeople([])
            });

    }, [])

    return (
        <PeopleList people = {people}></PeopleList>
    );
}

export default Page2;
