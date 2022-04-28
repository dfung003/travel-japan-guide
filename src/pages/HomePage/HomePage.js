

export default function HomePage({ destinations }) {
    return (
        <main className="Home">
            <h1>Welcome to my Japan Travel Guide!</h1>
            <img src="/assets/homepage_image.png" />
            <div className="learn-more">
                <p>Learn more about Japan and its rich culture, popular sightseeing spots, and delicious food.</p>
            </div>
            <img src="/assets/japan_map.png" />
        </main>
    )
}