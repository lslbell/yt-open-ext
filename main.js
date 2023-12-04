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

const formatSearchQuery = (search) => {
    let query = "";
    if (search) {
        query = search.split(" ").join("+");
    }
    return query;
};

const handleClickSearchBtn = () => {
    let input = document.getElementById("search-youtube").value;
    if (input) {
        const query = formatSearchQuery(input.toString());
        searchYoutube(query);
    }
};

const handleSelectText = (word) => {
    searchYoutube(word.selectionText);
}

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleClickSearchBtn)
