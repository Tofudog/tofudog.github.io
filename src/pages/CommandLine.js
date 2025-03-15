import {Link} from 'react-router-dom'

function CommandLine() {
    return <>
        <div>
            <h4>
                Command Documentation:
                &nbsp;
                <Link to="/documentation" target="_blank" rel="noopener noreferrer">here</Link>
            </h4>
        </div>
        <div id="flex-container-cmd">
            <div id="flex-item-cmd">
                <h4>
                    hacker123@your-computer %
                </h4>
            </div>
            <div id="flex-item-cmd">
                <h4>
                    <input class="mock-command-line"></input>
                </h4>
            </div>
        </div>
    </>
}

export default CommandLine;