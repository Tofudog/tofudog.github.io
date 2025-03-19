import React, { useState, useEffect } from 'react';

function getColorTuple(color) {
    let colorTuple = [];
    
    //get the first rgb value
    let start = 4; let k = start;
    while (color.charAt(k) !== ',') {++k;}
    colorTuple.push(color.substring(start, k));

    //get the second rgb value
    k += 2; start = k;
    while (color.charAt(k) !== ',') {++k;}
    colorTuple.push(color.substring(start, k));

    //get the third rgb value (last digit always precedes a ')'
    k += 2; start = k;
    while (color.charAt(k) !== ')') {++k;}
    colorTuple.push(color.substring(start, k));

    return colorTuple;
}

function colorTupleToString(colorTuple) {
    let colorString = `rgb(${colorTuple[0]}, ${colorTuple[1]}, ${colorTuple[2]})`;
    return colorString;
}

function nextColor(color) {
    let colorTuple = getColorTuple(color);
    let increaseChoice = Math.floor(Math.random() * 2);
    let rgbChoice = Math.floor(Math.random() * 3);
    if (increaseChoice === 0) {
        //don't increase unless necessary
        if (colorTuple[rgbChoice] === "0") {
            colorTuple[rgbChoice] = "1";
        }
        else {
            colorTuple[rgbChoice] = (parseInt(colorTuple[rgbChoice]) - 9).toString();
        }
    }
    else {
        if (colorTuple[rgbChoice] === "255") {
            colorTuple[rgbChoice] = "254";
        }
        else {
            colorTuple[rgbChoice] = (parseInt(colorTuple[rgbChoice]) + 9).toString();
        }
    }
    return colorTupleToString(colorTuple);
}

function ChangingTextColor(props) {
    const [textColor, setTextColor] = useState("rgb(94, 255, 0)");
    const [decreasing, setDecreasing] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const randomColor = await nextColor(textColor);
            setTextColor(randomColor);
        }, 8);
        return () => clearInterval(intervalId);
    }, [textColor]);

    return (
        <div style={{ color: textColor }}>
            <props.component>
                {props.text.toString()}
            </props.component>
        </div>
    );
}

export default ChangingTextColor;
