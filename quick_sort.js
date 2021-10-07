// console.log("inside Quick Sort js file")

const quicksort = () => {
    const range = document.getElementById('range');
    num_of_bars = (range.value * 3);
    const speed_range = document.getElementById('speed_range');
    speed = speed_range.value*100;
    // console.log(`Number of Bars ${num_of_bars}`)
    QuickSort(0, num_of_bars - 1);
}
async function pivot_partition(l, r, delay = speed) {
    var bars = document.querySelectorAll(".bar");
    var pivot = Number(bars[l].childNodes[0].innerHTML);
    console.log(`Bars ${bars.length} pivot ${pivot}`);
    var i = l-1;
    var j = r+1;
    while (true) {
        // Find leftmost element greater than or equal to pivot
        do {
            i++;
            if (i - 1 >= l) bars[i - 1].style.backgroundColor = "red";
            bars[i].style.backgroundColor = "yellow";
            //To wait for some milliseconds
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
            );
            console.log(`I:${i}`)
        } while (Number(bars[i].childNodes[0].innerHTML) < pivot && i<r);

        // Find rightmost element smaller than or equal to pivot
        do {
            j--;
            if (j + 1 <= r) bars[j + 1].style.backgroundColor = "green";
            bars[j].style.backgroundColor = "yellow";
            //To wait for some milliseconds
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
            );
            console.log(`J:${j}`)
        } while (Number(bars[j].childNodes[0].innerHTML) > pivot && j>l);

        // If two pointers met.
        if (i >= j) {
            for (var k = 0; k < num_of_bars; k++) bars[k].style.backgroundColor = "#6b5b95";
            return j;
        }

        //swapping ith and jth element
        var temp1 = bars[i].style.height;
        var temp2 = bars[i].childNodes[0].innerText;
        bars[i].style.height = bars[j].style.height;
        bars[j].style.height = temp1;
        bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
        bars[j].childNodes[0].innerText = temp2;
        //To wait for some milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
    }
}
// Asynchronous QuickSort function
async function QuickSort(l, r, delay = 100) {
    // QuickSort Algorithm
    if (l < r) {
        //Storing the index of pivot element after partition
        var pivot_idx = await pivot_partition(l, r);
        console.log(pivot_idx);
        //Recursively calling quicksort for left partition
        await QuickSort(l, pivot_idx);
        //Recursively calling quicksort for right partition
        await QuickSort(pivot_idx + 1, r);
    }
}
