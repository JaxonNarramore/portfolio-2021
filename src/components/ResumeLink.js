import { Link } from 'react-router-dom'
import { Button } from "./Button";

function ResumeLink() {
    return (
        <div>
            <Link to='/resume'>
                <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Resume</Button>
            </Link>
        </div>
    );
}

export default ResumeLink;