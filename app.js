const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const deg = document.getElementById('deg');
const gradientView = document.querySelector('.gradient-view');
const textArea = document.getElementById('textarea');
const copy = document.querySelector('.btn.btn-primary')

color1.addEventListener('change', () => {
    // console.log(color1.value)
    gradient();
});

color2.addEventListener('change', () => {
    // console.log(color2.value)
    gradient();
});

deg.addEventListener('change', () => {
    // console.log(deg.value)
    gradient();
});

const gradient = () => {
    const bgColor = document.getElementById('bg-color');
    const gradientCode = document.getElementById('gradient-code');

    const linearGradient = `linear-gradient(${deg.value}deg,${color1.value}, ${color2.value})`;

    gradientView.style.background = color1.value;
    gradientView.style.backgroundImage = linearGradient;

    bgColor.innerHTML = color1.value;
    gradientCode.innerText = linearGradient;

    textArea.value = `background: ${color1.value};
background-image: ${linearGradient};
`;
}

copy.addEventListener('click', () => {
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    // alert('გრადაციის კოდი წარმატებიტ დაკოპირდა')
});
