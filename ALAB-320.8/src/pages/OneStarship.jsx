import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import List from '../components/List'
function OneStarship() {
    const params = useParams();
    const shipId = params.id
    const [ship, setShip] = useState({})
    // const [data, setData] = useState([])
    useEffect(()=>{
      let getShip = async ()=>{
        let results = await axios.get(`https://swapi.dev/api/starships/${shipId}`)
        let shipData = results.data
        console.log("SHIP DATA", shipData)
        setShip(shipData)
        return shipData
      }
      try{
       let oneShip = getShip()  
        //    for (const key in oneShip){
        //     console.log("KEY", key)
        //     console.log("VALUE", oneShip[key])
        //         rows.push(<li>{key}: {oneShip[key]}</li>)
        //  }
        // console.log("KEYS", oneShip["MGLT"])
        // const data = Object.keys(oneShip).map(oneKey => {
        //             return (<li>{oneKey}: {oneShip[oneKey]}</li>)
        //         })
        //         setData(data)

      }catch(err){
        console.log("ERROR:", err)
      }
    }, [])

    let rows = []
  Object.keys(ship).map(oneKey => {
        return rows.push(<List key={oneKey} objectKey={oneKey} value={ship[oneKey]}/>)
    })
  return (
   <>
   {rows}
   </>
  )
}

export default OneStarship