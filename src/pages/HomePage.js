import AppBar from "../components/AppBar";

function HomePage() {
    return (
        <div className="bg-neutral">
            <AppBar />
            <div className="jumbotron text-center page-content text-white">
                <h1 className="display-4">CHARGING STATION GO BRUM BRUM</h1>
                <p className="text-3xl font-bold underline">Looking to charge your car?</p>
                <p className="text-primary">Look further here nothing is yet implemented</p>
                <p className="display-6 lead text-error">PAGE UNDER CONSTRUCTION</p>
            </div>
        </div>
    )
}

export default HomePage;