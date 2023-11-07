import app from './app';
import './models/associations';
// import './models/db/sync-db';

const PORT = 63000;

app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
