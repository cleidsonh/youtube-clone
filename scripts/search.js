function searchVideo(event) {
    const videos = document.getElementsByClassName('video-card');
    const search = event.target.value.toLowerCase();

    for (const video of videos) {
        const videoInfo = {
            title: video.getElementsByTagName('h3')[0].innerText.toLowerCase(),
            channelName: video.getElementsByTagName('p')[0].innerText.toLowerCase(),
            category: video.getElementsByTagName('p')[1].innerText.toLowerCase()
        }
        console.log('videoInfo ::', videoInfo)

        video.style.display = 'revert';

        if (!matches(videoInfo, search)) {
            // Remove da tela
            video.style.display = 'none';
        }
    }
}

function matches(videoInfo, searchTerm) {
    return (
        videoInfo.title.includes(searchTerm) ||
        videoInfo.channelName.includes(searchTerm) ||
        videoInfo.category.includes(searchTerm)
    )
}