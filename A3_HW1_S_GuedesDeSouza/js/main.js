(() => {
    // confirm JS file is running
    console.log ('CODING IS BAD FOR YOUR HEALTH')

    // fetches data from the JSON file
    fetch('./data/classData.json')
    .then(res => res.json())

    .then(data => {
    // variables to refer back to in the text box
            let CLASS = document.querySelector('.profPanelText').children,
                COURSE = document.querySelector('.courseInfo').children;

    // pulls contant from strings in the JSON file to generate text on the white box within the hero image's area
            CLASS[0].innerHTML = data.coursename + " " + "-" + " " + data.coursecode;
            CLASS[1].textContent = "Professor " + data.profname;
            CLASS[2].innerHTML = data.classtime[0] + " " + "-" + " " + data.classtime[1];
    // pulls contant from strings in the JSON file to generate text that goes in the description area below the hero image's area
            COURSE[0].innerHTML = data.coursename + data.coursecode;
            COURSE[3].innerHTML = data.coursedesc;
    })
})();
