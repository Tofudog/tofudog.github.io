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

function nextColor(color, decreasing) {
    let colorTuple = getColorTuple(color);
    let rgbChoice = Math.floor(Math.random() * 2);
    let hueValue = parseInt(colorTuple[rgbChoice]);
    if (decreasing) {
        if (hueValue === 0) {++hueValue;}
        else {--hueValue;}
    }
    else {
        if (hueValue === 255) {--hueValue;}
        else {++hueValue};
    }
    colorTuple[rgbChoice] = hueValue.toString();
    return colorTupleToString(colorTuple);
}

function isSmallerColor(color, otherColor) {
    /*
    Helper function to determine whether pallete is now decreasing.
    Returns: ---> true if color < otherColor (i.e. darker)
             ---> false otherwise
    */
    let colorTuple = getColorTuple(color);
    let otherColorTuple = getColorTuple(otherColor);
    for (var i=0; i<3; i++) {
        if (parseInt(colorTuple[i]) < parseInt(otherColorTuple[i])) {
            return true;
        }
    }
    return false;
}

function ChangingTextColor(props) {
    const [textColor, setTextColor] = useState("rgba(211, 243, 218, 1)");
    const [decreasing, setDecreasing] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const randomColor = await nextColor(textColor, decreasing);
            if (isSmallerColor(randomColor, textColor)) {
                setDecreasing(true);
            }
            else {setDecreasing(false);}
            setTextColor(randomColor);
        }, 7);
        return () => clearInterval(intervalId);
    }, [textColor, decreasing]);

    return (
        <props.component id="no-starter-color">
            <div style={{ color: textColor }}>
                {props.text.toString()}
            </div>
        </props.component>
    );
}

export default ChangingTextColor;
