const $gifArea = $("#gif-area");
const $searchInput = $("#search");

$("form").on("submit", async function(e) {
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const res = await axios.get("http://api.giphy.com/v1/gifs/search",
        {params: { q : searchTerm, api_key: "eK3vmV3UXQs7RtUpRi6zRsaQcppN9vQ3"}
    });
    addGif(res.data);
})

function addGif(res) {
    let numResults = res.data.length;
    let randomIdx = Math.floor(Math.random() * numResults);
    let $gifDiv = $("<div>", { class: "col-md-4 col-12 mb-4 align-items-center"});
    let $newGif = $("<img>", { src: res.data[randomIdx].images.original.url,
         class: "w-100"});
    $gifDiv.append($newGif);
    $gifArea.append($gifDiv);
}

$("#remove").on("click", function() {
    $gifArea.empty();
});
