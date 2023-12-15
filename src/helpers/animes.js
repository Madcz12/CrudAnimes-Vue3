const urlBase = 'https://kitsu.io/api/'

module.exports.getAnime = async function () {
    let animeArray = await fetch(urlBase + 'edge/trending/anime?limit=10').then((res) => res.json())

    let animeObject = []

    animeArray['data'].forEach(a => {
        animeObject.push({
            id: a['id'],
            /* title: a.attributes.titles.en, */
            title: a.attributes.canonicalTitle,
            description: a.attributes.description,
            image: a.attributes.posterImage.medium,
        })
    })

    return animeObject
}
