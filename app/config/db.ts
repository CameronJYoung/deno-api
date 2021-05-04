import { Database, PostgresConnector } from '../../deps.ts';

const connection = new PostgresConnector({
	host: 'db',
	username: 'postgres',
	password: 'postgres',
	database: 'denotesting',
	port: 5432,
});

const db = new Database(connection);

export default db
