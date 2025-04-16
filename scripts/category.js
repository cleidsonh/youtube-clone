const filterButtons = document.querySelectorAll('.category-btn');
filterButtons.forEach((button) => button.addEventListener('click', showVideos))

function showVideos(event) {
    const videos = document.getElementsByClassName('video-card');
    const button = event.target;
    const category = button.getAttribute('data-category').toLowerCase();

    filterVideos(category, videos);
}

function filterVideos(category, videos) {
    for (const video of videos) {
        const videoCategory = video.classList[1];

        if (category === 'all' || category === videoCategory) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    }
}