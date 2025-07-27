const form = document.querySelector("form")
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const dobinput = document.getElementById('inputDate').value;
    const results = document.querySelector(".results");

    if(!dobinput) {
        results.innerHTML = 'Please Enter a Valid DOB!';
        return;
    } else {
        const dob = new Date(dobinput);
        const today = new Date();

        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth()
        let days = today.getDate() - dob.getDate()

        if(days < 0) {
            months--;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(),0);
            days = days + prevMonth.getDate();
        }

        if(months < 0) {
            years--;
            months = 12 + months;
        }

        results.innerHTML = `Your age is: ${years}Y ${months}M & ${days}D`
    }
})