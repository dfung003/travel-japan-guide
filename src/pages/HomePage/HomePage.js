

export default function HomePage() {
    return (
        <main className="main">
            <div className="Home">

                <h1>Welcome to my Japan Travel Guide!</h1>
                <div className="home-container">
                    {/* <div className="large-container">
                    <img className="home-image" src="/assets/homepage_image.png" />
                    <div className="small-container">
                        <img className="home-image-md" src="/assets/shibuya.png" />
                        <img className="home-image-md" src="/assets/sushi_jp.png" />
                    </div>
                </div> */}
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img id="carousel-img" src="/assets/homepage_image.png" class="d-block w-100" alt="lady-with-parasol" />
                            </div>
                            <div class="carousel-item">
                                <img id="carousel-img" src="/assets/shibuya.png" class="d-block w-100" alt="shibuya" />
                            </div>
                            <div class="carousel-item">
                                <img id="carousel-img" src="/assets/sushi_jp.png" class="d-block w-100" alt="sushi" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>

                </div>
                <div className="learn-more">
                    <p>Learn more about Japan and its rich culture, popular sightseeing spots, and delicious food.</p>
                </div>
                <br />
                <a href="https://www.japan-guide.com/">Map (below) from</a><br />
                <img className="region-img" src="/assets/japan_map.png" />

            </div>
        </main>

    )
}