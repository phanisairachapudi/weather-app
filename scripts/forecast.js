class Forecast{
    constructor(){
        this.key = 'jh6taRgjFEZRLDFs5fS45HFE66TlGoJ2'
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityUrl ='http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity(city){
        const cityDets = await this.getCity(city)
        const weather = await this.getWeather(cityDets.Key)
        return{ cityDets, weather }
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityUrl + query)
        const data = await response.json()
        return data[0]
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`
        const response = await fetch(this.weatherUrl + query)
        const data = await response.json()
        return data[0]
    }
}


/*const key = 'jh6taRgjFEZRLDFs5fS45HFE66TlGoJ2'

//get weather information

const getWeather = async (id) => {

    const base =  'http://dataservice.accuweather.com/currentconditions/v1/'

    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)

    const data = await response.json()

    return data[0]
}

//get city information

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'

    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)

    const data = await response.json()

    return data[0]
}

/*getCity('manchester')
           .then(data => {
               return getWeather(data.Key)
           }).then(data => console.log(data))
             .catch(err => console.log(err))*/ 
             