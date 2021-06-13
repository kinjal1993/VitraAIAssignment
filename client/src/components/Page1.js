import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PeopleList from "./PeopleList";
import axios from 'axios';
import { PEOPLE_SEARCH_URL } from '../urls';

function valuetext(value) {
    return `$${value}`;
}

const Page1 = (props) => {
    const [people, setPeople] = useState([])
    const [value, setValue] = useState([2000, 3000]);
    const minRange = 1000;
    const maxRange = 4000;
    const step = 500;

    useEffect(() => {
        const params = {
            balanceMin: value[0],
            balanceMax: value[1]
        };

        axios.get(PEOPLE_SEARCH_URL, {
            params: params
        }).then(response => response.data)
            .then((result) => {
                setPeople(result.data)
            })
            .catch(error => setPeople([]));

    }, [value])

    const marks = [];
    for (let i = minRange; i <= maxRange; i += step) {
        marks.push({
            value: i,
            label: valuetext(i)
        })
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                Change Balance Range To Filter Data
            </Typography>
            <Slider
                defaultValue={[2000, 3000]}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                min={minRange}
                max={maxRange}
                step={step}
                marks={marks}
            />
            <PeopleList people={people}></PeopleList>
        </div>
    );
}

export default Page1;
