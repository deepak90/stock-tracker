export const determineMarketStatus = (date) =>  {
 return date.toLocaleString("en-US", {timeZone: "America/New_York"});
}