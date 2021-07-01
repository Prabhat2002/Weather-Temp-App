import React, { useEffect, useState } from 'react';
function Weather() {
    // let a=new Date().toLocaleTimeString();
    const [city, newcity] = useState(null);
    const [search, setsearch] = useState("Lucknow")
    useEffect(() => {
        const fetchAPI = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8efcf76b90115e718e4d6ab5a2621797`;
            const resp = await fetch(url);
            const respjson = await resp.json();
            console.log(respjson);
            newcity(respjson.main);
        };
        fetchAPI();
    }, [search])

    return (
        <>
            <div className="form">
                <center><input type="text" value={search} placeholder=" Enter City Name" onChange={(e) => { setsearch(e.target.value) }} /></center>
                {
                    !city ? (<center><p className="p">No Data Found</p></center>) : (
                        <div>
                            <div className="info">
                                <center><h1>{search}</h1></center>
                                <center><h3>Current Temp : {city.temp}'C</h3></center>
                                <center><p>Min:{city.temp_min}'C - Max:{city.temp_max}'C</p></center>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}
export default Weather;
//delay 
//cost 
//packet loss