let folder = 'lissajousCurve';

let express = require('express'),
	fs = require('fs-extra'),
	spawn = require('child_process').spawn,
	path = require('path');
let app = express();

// if not found, create and initialize folder
if (!fs.existsSync(folder)) {
	// put curr in public
	let currFolder = fs.readdirSync(__dirname)
		.filter(a => (fs.statSync(a).isDirectory() 
			&& !["public", "template", "node_modules", ".upm", ".git"].includes(a))
		)[0]

	console.log(currFolder)
	spawn('mv', [`${currFolder}/`, 'public/'])

	// check if folder is in public/
	if (fs.existsSync(`public/${folder}`)) {
		// if exists, bring it out
		spawn('mv', [`public/${folder}`, `${folder}/`])

	} else {
		// else make new one
		console.log(`creating folder ${folder}`);
		fs.mkdirSync(path.join(__dirname, folder))
		
		// copy files from template/
		for (let f of ["index.html", "script.js", "style.css"]) {
			fs.copyFile(`template/${f}`, `${folder}/${f}`, (err) => {
				if (err) throw err;
				console.log(`${f} copied successfully`);
			});
		}
	}
}

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (request, response) => {
    response.sendFile(__dirname + `/${folder}/` + 'index.html');
});
app.get('/script.js', (request, response) => {
    response.sendFile(__dirname + `/${folder}/` + 'script.js');
});
app.get('/style.css', (request, response) => {
    response.sendFile(__dirname + `/${folder}/` + 'style.css');
});
app.get('/utils.js', (request, response) => {
    response.sendFile(__dirname + `/${folder}/` + 'utils.js');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + `/public/about.html`);
});

let port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}`));