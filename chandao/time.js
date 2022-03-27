
function changeHTML() {
    let celldays = document.querySelectorAll(".cell-day .events");
    let headings = document.querySelectorAll(".cell-day .heading");
    for (let index in celldays) {
        let timesArr = celldays[index].childNodes;
        let time = 0;
        if (timesArr && timesArr.length) {
            for (let t of timesArr) {
                let timestr = t.lastElementChild.innerText;
                time += parseFloat(timestr.substr(0, timestr.length - 1));
            }
            let span = document.createElement("span");
            span.innerText = time + "h";
            if (time === 8) {
                span.style = "color:blue;"
            } else {
                span.style = "color:red;font-size: 18px;"
            }
            headings[index].prepend(span)
            console.log(time)
        }
    }
    console.log("禅道")
}

window.onloaded = function () {
    setTimeout(() => {

        changeHTML();
    }, 5000)
}

