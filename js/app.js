const loadData = async () => {
	const res = await fetch("url");
	const data = await res.json();
    console.log(data)
};

