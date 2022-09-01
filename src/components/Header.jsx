function Header(props) {
    const styles = {
        backgroundColor: "rgb(0,255,0)",
        color: "rgb(255,255,255)",
    }
    
    return (
        <div className="container" style={styles}>
            <h1>{props.title}</h1>
            <p>{props.descp}</p>
        </div>
    )
}

Header.defaultProps = {
    text: "Hello World",
    descp: "This is a hello world text"
}

export default Header;