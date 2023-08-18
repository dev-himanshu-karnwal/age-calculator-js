const calcYear = (currentDate, enteredDate) =>
	currentDate.getFullYear() - enteredDate.getFullYear()
	- (currentDate.getMonth() < enteredDate.getMonth() ?
		1 : 0);

const calcMonth = (currentDate, enteredDate) => {

	const curMon = currentDate.getMonth();
	const entMon = enteredDate.getMonth();


	return curMon - entMon +
		(curMon >= entMon ? 0 : 12) -
		(currentDate.getDate() < enteredDate.getDate() ? 1 : 0);
}

const calculate = function () {

	const entered = document.querySelector('.input').value;
	if (!entered)
		return alert('Enter a Date');

	document.querySelector('.hidden').style.opacity = 1;
	const currentDate = new Date();
	const enteredDate = new Date(entered);

	const year = calcYear(currentDate, enteredDate);
	const month = calcMonth(currentDate, enteredDate);

	document.querySelector('.calculated-age').innerHTML = `${month} Month ${year} Year`;
}

document.querySelector('.calculate').addEventListener('click', calculate);
document.addEventListener('keydown', (e) => {
	if (e.key === 'Enter')
		calculate();
})
