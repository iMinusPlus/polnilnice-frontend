import AppBar from "../components/AppBar";

function HomePage() {
    return (
        <div className="container-fluid">
            <AppBar />
            <div className="jumbotron text-center page-content ">
                <h1 className="display-4">CHARGING STATION GO BRUM BRUM</h1>
                <p className="lead">Looking to charge your car?</p>
                <p className="lead">Look further here nothing is yet implemented</p>
                <p className="display-6 lead error-text" style={styles.underConstruction}>PAGE UNDER CONSTRUCTION</p>
            </div>
        </div>
    )
}

const styles = {
    underConstruction: {
        marginTop: "10rem"
    }
}

export default HomePage;