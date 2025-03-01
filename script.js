document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.calculator button').forEach(button => {
        button.addEventListener('click', function() {
            const display = document.getElementById('display');
            if (this.innerText === 'C') {
                display.value = '';
            } else if (this.innerText === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += this.innerText;
            }
        });
    });
});
