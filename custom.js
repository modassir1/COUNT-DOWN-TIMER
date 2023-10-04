const endDate = "18 OCT 2023 11:00 PM";
const inputs = document.querySelectorAll('input');
document.getElementById('end-date').innerHTML = endDate;



const clock = () => {
    const end = new Date(endDate);
    const date = new Date();
    // console.log(end);
    // console.log(date);


    const diff = (end - date) / 1000;

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);

    inputs[1].value = Math.floor(diff / 3600) % 24;

    inputs[2].value = Math.floor(diff / 60) % 60;

    inputs[3].value = Math.floor(diff) % 60;

    // converting date into days;
    // 1 day = 24h;
    // 1 hr = 60 min;
    // 60 min = 3600sec;
}


clock();

setInterval(() => {
    clock();
}, 1000);

