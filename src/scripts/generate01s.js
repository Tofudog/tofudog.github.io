const PATTERN_SIZE = 35;

function output01() {
    let section01 = [];
    for (var i=0; i<PATTERN_SIZE; i++) {
        const chosen = Math.round(Math.random()); //selects either 0 or 1
        section01.push(chosen.toString());
        section01.push(<br></br>);
    }
    return section01;
}

export default output01;
