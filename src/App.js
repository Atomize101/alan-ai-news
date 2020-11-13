import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

//aa996cbd564644689988152f23adce3d key for newsapi.org

const alanKey = 'b31e2db9646e2432171478312bf270462e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);

	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				if (command === 'newHeadLines') {
					setNewsArticles(articles);
				}
			},
		});
	}, []);

	return (
		<div>
			<h1>Alan AI news app</h1>
			<NewsCards articles={newsArticles} />
		</div>
	);
};

export default App;
