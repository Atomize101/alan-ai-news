import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

//aa996cbd564644689988152f23adce3d key for newsapi.org

const alanKey = 'b31e2db9646e2432171478312bf270462e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				if (command === 'newHeadLines') {
					console.log(articles);
				}
			},
		});
	}, []);

	return (
		<div>
			<h1>Alan AI news app</h1>
		</div>
	);
};

export default App;
