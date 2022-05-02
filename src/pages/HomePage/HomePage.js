

export default function HomePage({ destinations }) {
    return (
        <main className="Home">
            <h1>Welcome to my Japan Travel Guide!</h1>
            <div className="home-container">
                <div className="large-container">
                    <img className="home-image" src="/assets/homepage_image.png" />
                </div>
                <div className="small-container">
                    <img className="home-image-md" src="/assets/shibuya.png" />
                    <img className="home-image-md" src="/assets/sushi_jp.png" />
                </div>
            </div>
            <div className="learn-more">
                <p>Learn more about Japan and its rich culture, popular sightseeing spots, and delicious food.</p>
            </div>
            <img className="region-img" src="/assets/japan_map.png" />
        </main>
    )
}