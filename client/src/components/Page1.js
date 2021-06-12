import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PeopleList from "./PeopleList";

function valuetext(value) {
    return `$${value}`;
}

const Page1 = (props) => {
    const [people, setPeople] = useState([])
    const [value, setValue] = useState([2000, 3000]);

    useEffect(() => {
        const filters = {
            balanceRange: value
        };

        const data = JSON.stringify({ "filters": filters });

        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        };

        fetch("http://localhost:5000/people/", requestOptions)
            .then(response => response.json())
            .then(result => setPeople(result.data))
            .catch(error => console.log('error', error));

        // const config = {
        //     method: 'GET',
        //     url: 'http://localhost:5000/people/',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {

        //     })
        //     .catch(function (error) {
        //         setPeople([])
        //     });

    }, [value])

    const marks = [
        {
            value: 1000,
            label: valuetext(1000),
        },
        {
            value: 4000,
            label: valuetext(4000),
        },
    ];

    const handleChange = (event, newValue) => {

        setValue(newValue);
    };
    return (
        <div>
            <Typography variant="h5" component="h5" id="discrete-slider-restrict" gutterBottom>
                Select Range
            </Typography>
            <Slider
                defaultValue={[2000, 3000]}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                min={1000}
                max={4000}
                step={500}
                marks={marks}
            />
            <PeopleList people={people}></PeopleList>
        </div>
    );
}

export default Page1;
