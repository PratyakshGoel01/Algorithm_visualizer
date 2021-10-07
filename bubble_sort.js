// console.log("inside bubble sort js")

let bars = document.querySelectorAll(".bar");
// console.log(`number of bars: ${bars.length}`);

async function bubbleSort() {
    const speed_range = document.getElementById('speed_range');
    speed = speed_range.value*100;
    var j = 0
    let bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i += 1) {
        for (j = 0; j < bars.length - i - 1; j += 1) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "darkblue";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            var val1 = parseInt(bars[j].childNodes[0].innerHTML);
            var val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

            // Compare val1 & val2
            if (val1 > val2) {
                var temp1 = bars[j].style.height;
                var temp2 = bars[j].childNodes[0].innerText;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp1;
                bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
                bars[j + 1].childNodes[0].innerText = temp2;
                bars[j].style.backgroundColor = " rgb(24, 190, 255)";
                bars[j + 1].style.backgroundColor = "red";
                // To pause the execution of code for 300 milliseconds
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, speed)
                );
            } else {
                bars[j].style.backgroundColor = " rgb(24, 190, 255)";
                // bars[j+1]
            }
        }
        bars[j].style.backgroundColor = " rgb(49, 226, 13)";
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
    }
}