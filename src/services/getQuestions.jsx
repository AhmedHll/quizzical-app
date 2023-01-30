const getQuestions = async gameOptions => {
	const { category, difficulty, type } = gameOptions;
	console.log(gameOptions)
	let categoryQueryParam = "";
	let difficultyQueryParam = "";
	let typeQueryParam = "";

	if (category !== "")
		categoryQueryParam = `&category=${category}`;

	if (difficulty !== "")
		difficultyQueryParam = `&difficulty=${difficulty}`;

	if (type !== "")
		typeQueryParam = `&type=${type}`;

	let apiUrl = `https://opentdb.com/api.php?amount=5${categoryQueryParam}${difficultyQueryParam}${typeQueryParam}`;

	const res = await fetch(apiUrl);
	const data = await res.json();
	return data.results;
}

export default getQuestions;