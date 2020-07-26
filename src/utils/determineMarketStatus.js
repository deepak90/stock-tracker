export const determineMarketStatus = (date) =>  {
	const currentTimeInNY = date.toLocaleString("en-US", {timeZone: "America/New_York"});
	const dateFromNYTime = new Date(currentTimeInNY);
	const currentDay = dateFromNYTime.getDay();
	const currentHour = dateFromNYTime.getHours();
	const currentMinute = dateFromNYTime.getMinutes();

	// check if weekend or not inside operating hours (9:30Am to 5:00PM), return closed
	if(currentDay === 6 || currentDay === 0) {
		return 'closed';
	} else if(((currentHour < 9) || (currentHour == 9 && currentMinute < 30)) || currentHour > 17 ) {
		return 'closed'
	}
		return 'open';
}