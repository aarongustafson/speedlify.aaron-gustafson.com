module.exports = {
	name: "aaron-gustafson.com", // optional, falls back to object key
	description: "My Home Sweet Home",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.aaron-gustafson.com/",
		"https://www.aaron-gustafson.com/about/",
    "https://www.aaron-gustafson.com/appearances/",
		"https://www.aaron-gustafson.com/notebook/",
		"https://www.aaron-gustafson.com/notebook/links/",
    "https://www.aaron-gustafson.com/publications/",
		"https://www.aaron-gustafson.com/speaking-engagements/",
    "https://www.aaron-gustafson.com/tags/progressive-enhancement/"
	]
};
