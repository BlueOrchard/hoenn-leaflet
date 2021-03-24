import axios from 'axios'

const apiCalls = {
    fetchLocation: async(ID: number) => {
        return await axios.get(`https://pokeapi.co/api/v2/location/${ID}/`)
    },
    fetchArea: async(ID: number) => {
        return await axios.get(`https://pokeapi.co/api/v2/location-area/${ID}`)
    }
}

export default apiCalls