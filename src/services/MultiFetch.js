export default function multiFetch(uuid){

  const cryptoApiHeaders = {
    "Content-Type": "application/json",
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '76eb2a4032msheddac568f49c7ffp1b95e5jsn321ed5c2f2ec'
  }

  uuid.map(coinId => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${coinId}`
    fetch(url, { headers: cryptoApiHeaders })
      .then(res => console.log(res))
      .then(data => console.log(data))
  })
}