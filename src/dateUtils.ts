export function areDatesOfSameDay(date1: Date, date2: Date) {
	return (
		date1.getUTCDay() === date2.getUTCDay() &&
		date1.getUTCMonth() === date2.getUTCMonth() &&
		date1.getUTCFullYear() === date2.getUTCFullYear()
	);
}
