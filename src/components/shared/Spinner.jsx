import spinner from '../assets/spinner.gif';


function Snippet() {
    return (
        <img 
            src={spinner} 
            alt="Loading..."
            style={{
                width: '100px',
                margin: 'auto',
                display: 'block'
            }} />
    )
}

export default Snippet