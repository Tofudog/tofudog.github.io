import {Link} from 'react-router-dom'

function Documentation() {
    return <>
        <div id="documentation-layout">
            <h1>
                The Leonardo de Farias Blog Command Line Documentation
            </h1>
            <div class="command">
                <h3 class="white-text">
                    To run any one of these commands, type them after
                    the % and hit ‘return’ or 'enter', depending on your operating system.
                    This is the documentation for
                    &nbsp;
                    <Link to="/">my blog</Link>
                </h3>
            </div>
            <div class="command">
                <h2>show projects</h2>
                <h4>
                    Displays an ordered list of clickable boxes with a
                    description and source code of a project.
                </h4>
            </div>
            <div class="command">
                <h2>show experiences</h2>
                <h4>
                    Displays an ordered list of boxes with a description of
                    an experience and an appropriate logo.
                </h4>
            </div>
            <div class="command">
                <h2>show skills</h2>
                <h4>
                    Displays two sections, each with an unordered list of skills.
                    Section 1 is a list of technology skills while Section 2 is a list
                    of personal skills.
                </h4>
            </div>
            <div class="command">
                <h2>download resume</h2>
                <h4>
                    Prompts the user to download a .pdf resume and
                    immediately does so upon clicking ‘yes’. Works for Mac and Windows.
                </h4>
            </div>
            <div class="command">
                <h2>clear</h2>
                <h4>
                    Clears the right side of the home page screen
                </h4>
            </div>
        </div>
    </>
}

export default Documentation;