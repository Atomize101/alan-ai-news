import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

//aa996cbd564644689988152f23adce3d key for newsapi.org

const alanKey = 'b31e2db9646e2432171478312bf270462e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
	const classes = useStyles();

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
			<div className={classes.logoContainer}>
				<img
					src="https://alan.app/voice/images/previews/preview.jpg"
					className={classes.alanLogo}
					alt="Alan Logo"
				/>
			</div>
			<NewsCards articles={newsArticles} />
		</div>
	);
};

export default App;
