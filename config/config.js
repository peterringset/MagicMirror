/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "no",
	timeFormat: 24,
	units: "metric",

	
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
	
		{
			module: 'MMM-Slack',
			position: 'bottom_center',
			showLatestMessageOnStartup: true,
			config: {
				slackToken: 'xoxp-249642763809-249509299984-250220848804-f77545f679df525f0f5d99210596ab31',
				slackChannel: 'magicmirror'
			}
		},
	
		{
			module: 'MMM-YrNow',
			position: 'top_right',
			config: {
				locationId: '1-2820936',
				showWeatherForecast: true
			}
		},

		{
			module: "MMM-YrThen",
			position: "bottom_right",
			header: "Yr",
			config: {
				location: "1-2820936",

			}
		},

		{
			module: 'MMM-NesteBussAtB',
			position: 'top_left',
			config: {
				showIcon: true, // Bus icon in front of row
				showNumber: true, // Bus number
				showFrom: false, // Bus stop name
				showTo: true, // Bus destination
				showMin: true, // "min" text after minutes
				size: "small", // Text size, for example small, medium or large
				stopIds: [16011377], // See https://www.atb.no/holdeplassoversikt/
				maxCount: 2, // Max number of next buses per route
				maxMinutes: 450 // Do not show buses more then this minutes into the future
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
