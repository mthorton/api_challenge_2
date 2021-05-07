// API Key: mKE6H7Pg9xCy0kZ51YadMOyiFPCsCbSLxzaPfwHc
// Example Usage: https://api.nasa.gov/planetary/apod?api_key=mKE6H7Pg9xCy0kZ51YadMOyiFPCsCbSLxzaPfwHc

// copyright
// date YYYY-MM-DD
// explanation
// hdurl
// media_type
// service_version
// title
// url

const apiKey = "?api_key=mKE6H7Pg9xCy0kZ51YadMOyiFPCsCbSLxzaPfwHc"
const baseURL = "https://api.nasa.gov/planetary/apod"

const getData = () => {
    try {
        let date = document.getElementById("dateSelector").value
        let fetchDate = "&date=" + date
        fetch(baseURL + apiKey + fetchDate)
        .then(res => res.json())
        .then(json => {
            
            if (json.media_type === "video"){
                displayDataVideo(json)
            } else if (json.media_type === "image") {
                displayDataImg(json)
            } else {
                errorFunction()
            }
        })
    } catch(error) {
        alert("Sorry, data is not available.")
    }
    
}

const displayDataImg = (dataArray) => {

    data = dataArray
    //console.log(data.media_type)

    // ----------------------------------Create Carousel Slide----------------------------------------
    // Initialize new elements to be added to carousel
    let slide = document.createElement("div") 
    let slide_img = document.createElement("img")
    let slide_cap_body = document.createElement("div")
    let slide_cap_title = document.createElement("h1") 
    let slide_cap_exp = document.createElement("p")
    let slide_link = document.createElement("a")
    let indicator = document.createElement("button")

    // Set attributes for the elements 
    slide.className = "carousel-item"
    slide_img.className = "d-block w-100" 
    slide_cap_body.className = "carousel-caption d-none d-md-block"

    
    // More attributes being set
    indicator.setAttribute("type", "button")
    indicator.setAttribute("data-bs-target", "#carouselExampleCaptions")
    indicator.setAttribute("data-bs-slide-to", bCount + 1)
    indicator.className = "active"
    indicator.setAttribute("aria-current", "true")
    bCount += 1
    indicator.setAttribute("aria-label", `Slide ${bCount + 1}`)
    
    // Attributes 
    slide.setAttribute("id", "dataContainer")
    slide_img.setAttribute("src", data.url)
    slide_img.setAttribute("alt", "...")
    slide_cap_title.setAttribute("id", "dataTitle")
    slide_cap_title.innerText = `Title: ${data.title} (${data.copyright})`
    slide_cap_exp.innerText = data.explanation
    slide_link.setAttribute("href", data.hdurl)
    slide_link.text = "Click Here For HD Image"
    
    // Adds the slide number to the new slide
    indicator.setAttribute("data-slide-to", bCount)

    // Adding all of the data into the slide
    slide.appendChild(slide_img)
    slide.appendChild(slide_cap_body)
    slide.appendChild(slide_cap_title)
    slide.appendChild(slide_cap_exp)
    slide.appendChild(slide_link)


    // Adding the data to the webpage
    carouselInd.appendChild(indicator)
    myCarousel.appendChild(slide)

    // ----------------------------------Manipulate Viewed Images Section----------------------------------------

    let title = document.getElementById(`img${bCount}`)
    title.innerText = `(${bCount}) TITLE: ${data.title}, DATE: ${data.date}`

    document.getElementsByTagName('p').style.color = "white"
}

const displayDataVideo = (dataArray) => {

    data = dataArray
    //console.log(data.media_type)

    // ----------------------------------Create Carousel Slide----------------------------------------
    // Initialize new elements to be added to carousel
    let slide = document.createElement("div") 
    let slide_video = document.createElement("iframe")
    let slide_cap_body = document.createElement("div")
    let slide_cap_title = document.createElement("h1") 
    let slide_cap_exp = document.createElement("p")
    let indicator = document.createElement("button")

    // Set attributes for the elements 
    slide.className = "carousel-item"
    slide_video.className = "d-block w-100" 
    slide_cap_body.className = "carousel-caption d-none d-md-block"

    
    // More attributes being set
    indicator.setAttribute("type", "button")
    indicator.setAttribute("data-bs-target", "#carouselExampleCaptions")
    indicator.setAttribute("data-bs-slide-to", bCount + 1)
    indicator.className = "active"
    indicator.setAttribute("aria-current", "true")
    bCount += 1
    indicator.setAttribute("aria-label", `Slide ${bCount + 1}`)
    
    // Attributes 
    slide.setAttribute("id", "dataContainer")
    slide_video.setAttribute("src", data.url)
    slide_video.setAttribute("height", "900px")
    slide_video.setAttribute("width", "600px")
    slide_video.setAttribute("alt", "...")
    slide_cap_title.setAttribute("id", "dataTitle")
    slide_cap_title.innerText = `Title: ${data.title} (${data.copyright})`
    slide_cap_exp.innerText = data.explanation
    
    // Adds the slide number to the new slide
    indicator.setAttribute("data-slide-to", bCount)

    // Adding all of the data into the slide
    slide.appendChild(slide_video)
    slide.appendChild(slide_cap_body)
    slide.appendChild(slide_cap_title)
    slide.appendChild(slide_cap_exp)

    // Adding the data to the webpage
    carouselInd.appendChild(indicator)
    myCarousel.appendChild(slide)

    // ----------------------------------Manipulate Viewed Images Section----------------------------------------

    let title = document.getElementById(`img${bCount}`)
    title.innerText = `(${bCount}) TITLE: ${data.title}, DATE: ${data.date}`
}

const errorFunction = () => {
    alert("Sorry, no data available for this date. Make sure to pick a date that occurred before today.")
}


// Main button on page that fetches data from the nasa api and displays it
let button = document.getElementById("nasaButton"), bCount = 0
button.addEventListener("click", getData)










