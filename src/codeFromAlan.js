// Use this sample to create your own voice commands

const API_KEY = 'aa996cbd564644689988152f23adce3d';
let savedArticles = [];

intent('Give me the news from $(source* (.*))', (p) => {
	let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

	if (p.source.value) {
		NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(' ').join('-')}`;
	}

	api.request(NEWS_API_URL, (error, response, body) => {
		const { articles } = JSON.parse(body);

		if (!articles.length) {
			p.play('Sorry, please try searching for news from a different source ');
		}

		savedArticles = articles;

		p.play({ command: 'newHeadLines', articles });
		p.play(`Here are the (latest | recent) ${p.source.value} news.`);
	});
});
