let count = 0
const button = document.querySelector('#butt');
const count1 = document.querySelector('#count');

button.addEventListener('click', function() {
  count++
  count1.textContent = count;
  console.log("cookie counted");
});
