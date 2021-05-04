import { DataTypes, Model } from '../../deps.ts';

export class Post extends Model {
	static table = 'posts';
	static timestamps = true;

	static fields = {
		id: { primaryKey: true, autoIncrement: true },
		username: {type: DataTypes.STRING},
		body: {type: DataTypes.STRING},
	};
}