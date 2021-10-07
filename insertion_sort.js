// console.log("inside insertion sort");
async function insertionSort() {
    const speed_range = document.getElementById('speed_range');
    speed = speed_range.value*100;
    let bars = document.querySelectorAll(".bar");
    let j;
    for (let i = 0; i < bars.length; i++) {
        var val1 = parseInt(bars[i].childNodes[0].innerHTML);
        var val1_hgt = bars[i].style.height;
        console.log(`Value${val1} and color${val1_hgt}`);
        j = i - 1;
        bars[i].style.backgroundColor = "darkblue";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        while (j >= 0 && val1 <= parseInt(bars[j].childNodes[0].innerHTML)) {
            bars[j].style.backgroundColor = "darkblue";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            // test log
            // console.log(`Value${bars[j].style.height} and height${bars[j].childNodes[0].innerText} swapped with Value${val1} and color${val1_hgt}`);
            bars[j + 1].style.height = bars[j].style.height;
            bars[j].style.height = val1_hgt;
            bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
            bars[j].childNodes[0].innerText = val1;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            
            j = j - 1;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            for(var k = i; k>=0; k--){
                bars[k].style.backgroundColor = 'rgb(49, 226, 13)';
            }
            bars[i].style.backgroundColor = 'rgb(24, 190, 255)';
        }
    }
}