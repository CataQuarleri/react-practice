import axios from 'axios'
export default async function getAllStarships(currentPage = 1) {
    try {
        let response = await axios.get(`https://swapi.dev/api/starships/?page=${currentPage}`)
        let starships = response.data.results
        return starships
    } catch (error) {
        console.log("ERROR", error)
    }
}