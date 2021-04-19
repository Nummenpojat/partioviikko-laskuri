const TallennaKavija = (floor:string, timestamp: Date) => {
    console.log(`Visitor registered in ${floor} at ${timestamp}`)
    let url = "https://nummenpojat.fi/visitcounter/backend"

    fetch(url+'/api/v1/log', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ floor: floor, date: timestamp })}).then(res => {
        res.json().then(json  => {
            if (!json.status) {
                alert(json.cause);
            }
        }).catch(error => {
            alert(error.toString());
        })
    }).catch(error => {
        alert(error.toString());
    })
}


export default TallennaKavija