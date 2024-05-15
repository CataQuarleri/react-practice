import axios from 'axios'
export default async function getAllStarships() {
    try {
        let response = await axios.get('https://swapi.dev/api/starships/')
        let starships = response.data.results
        console.log("starships", starships)
        return starships
    } catch (error) {
        console.log("ERROR", error)
    }
}