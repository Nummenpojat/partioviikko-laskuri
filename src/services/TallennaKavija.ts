const TallennaKavija = (floor:string, timestamp: Date) => {
    console.log(`Visitor registered in ${floor} at ${timestamp}`)
    let url = "https://nummenpojat.fi/visitcounter"

    fetch(url, {method: 'POST', body: JSON.stringify({ floor: floor, date: timestamp.toJSON() })})
}


export default TallennaKavija