const baseUri = 'https://www.youtube.com/results?search_query=';

const searchYoutube = (searchQuery) => {
    try {
        const uri = baseUri + searchQuery;
        chrome.tabs.create({
            'url': uri
        });
    }
    catch (e) {
        console.error("Failed to open window: " + e);
    }
};

chrome.contextMenus.create({
    id: "youtube-quicksearch-menu",
    title: "Youtube Quicksearch",
    contexts: ["selection"],
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    searchYoutube(info.selectionText)
});