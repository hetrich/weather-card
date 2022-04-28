var url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-FB8E5415-E482-45C1-B5B4-7F93A6AC59F4"

var Cities = [
    //全部
    ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'],
    //北部
    ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣'],
    //中部
    ['臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣'],
    // 南部
    ['臺南市', '高雄市', '屏東縣'],
    // 東部
    ['宜蘭縣', '花蓮縣', '臺東縣'],
    // 離島地區
    ['澎湖縣', '金門縣', '連江縣'],
]

var nowCities;
var orgData = {};
nowCities = Cities[0];


fetch_data();


function fetch_data() {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            organization_data(result);
            arrange_cities();
        })
}



function organization_data(result) {
    var locations = result.records.location;

    locations.forEach(location => {
        var locationName = location.locationName;
        var loc_we_t_0 = location.weatherElement[0].time[0];
        var wxCondition = loc_we_t_0.parameter.parameterName;
        var startTime = loc_we_t_0.startTime;
        var endTime = loc_we_t_0.endTime;
        var minT = location.weatherElement[2].time[0].parameter.parameterName;
        var maxT = location.weatherElement[4].time[0].parameter.parameterName;
        var pop = location.weatherElement[3].time[0].parameter.parameterName;
        var ci = location.weatherElement[1].time[0].parameter.parameterName;

        orgData[locationName] = {
            'wxCondition': wxCondition,
            'startTime': startTime,
            'endTime': endTime,
            'minT': minT,
            'maxT': maxT,
            'pop': pop,
            'ci': ci,
        };
    })
}


function arrange_cities() {

    nowCities = Cities[0];

    var cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = "";

    nowCities.forEach(function(city, index) {
        var cityData = orgData[city];
        
        console.log(city, cityData);
        
        cardRegion.innerHTML +=
            `
        <div class="single-card">
                <h3>${city}</h3>
                <div class="card-info">
                    <span>城市名稱：${city}</span>
                    <span>情況：${cityData.wxCondition}</span>
                    <span>降雨機率：${cityData.ci}%</span>
                    <span>體感描述：${cityData.pop}</span>
                </div>
            </div>
        `
    })
}


//各區域概況
// function 

//北部
function north_click(){

    nowCities = Cities[1];

    var cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = "";

    nowCities.forEach(function(city, index) {
        var cityData = orgData[city];
        console.log('cityData', city, cityData);
        cardRegion.innerHTML +=
            `
        <div class="single-card">
                <h3>${city}</h3>
                <div class="card-info">
                    <span>城市名稱：${city}</span>
                    <span>情況：${cityData.wxCondition}</span>
                    <span>降雨機率：${cityData.ci}%</span>
                    <span>體感描述：${cityData.pop}</span>
                </div>
            </div>
        `
    })
}


//中部
function mid_click(){


    nowCities = Cities[2];

    var cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = "";

    nowCities.forEach(function(city, index) {
        var cityData = orgData[city];
        console.log('cityData', city, cityData);
        cardRegion.innerHTML +=
            `
        <div class="single-card">
                <h3>${city}</h3>
                <div class="card-info">
                    <span>城市名稱：${city}</span>
                    <span>情況：${cityData.wxCondition}</span>
                    <span>降雨機率：${cityData.ci}%</span>
                    <span>體感描述：${cityData.pop}</span>
                </div>
            </div>
        `
    })
}


//南部
function south_click(){


    nowCities = Cities[3];

    var cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = "";

    nowCities.forEach(function(city, index) {
        var cityData = orgData[city];
        console.log('cityData', city, cityData);
        cardRegion.innerHTML +=
            `
        <div class="single-card">
                <h3>${city}</h3>
                <div class="card-info">
                    <span>城市名稱：${city}</span>
                    <span>情況：${cityData.wxCondition}</span>
                    <span>降雨機率：${cityData.ci}%</span>
                    <span>體感描述：${cityData.pop}</span>
                </div>
            </div>
        `
    })
}


//東部
function east_click(){


    nowCities = Cities[4];

    var cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = "";

    nowCities.forEach(function(city, index) {
        var cityData = orgData[city];
        console.log('cityData', city, cityData);
        cardRegion.innerHTML +=
            `
        <div class="single-card">
                <h3>${city}</h3>
                <div class="card-info">
                    <span>城市名稱：${city}</span>
                    <span>情況：${cityData.wxCondition}</span>
                    <span>降雨機率：${cityData.ci}%</span>
                    <span>體感描述：${cityData.pop}</span>
                </div>
            </div>
        `
    })
}

//離島地區
function other_click(){


    nowCities = Cities[5];

    var cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = "";

    nowCities.forEach(function(city, index) {
        var cityData = orgData[city];
        console.log('cityData', city, cityData);
        cardRegion.innerHTML +=
            `
        <div class="single-card">
                <h3>${city}</h3>
                <div class="card-info">
                    <span>城市名稱：${city}</span>
                    <span>情況：${cityData.wxCondition}</span>
                    <span>降雨機率：${cityData.ci}%</span>
                    <span>體感描述：${cityData.pop}</span>
                </div>
            </div>
        `
    })
}
