import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';


function AboutPage() {
    return (
        <Card>
            <div>
                <h1>About Page</h1>
                <p>This a page introduces the application.</p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to='/'>Back to home!</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage