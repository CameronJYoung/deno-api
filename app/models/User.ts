import { DataTypes, Model } from '../../deps.ts';

export class User extends Model {
	static table = 'users';
	static timestamps = true;

	static fields = {
		id: { primaryKey: true, autoIncrement: true },
		username: {type: DataTypes.STRING},
		password: {type: DataTypes.STRING},
		firstname: {type: DataTypes.STRING},
		lastname: {type: DataTypes.STRING},
		role: {type: DataTypes.STRING},
	};
}
