import { DataTypes, Model, bcrypt } from '../../deps.ts';

export interface UserInterface {
	id?: string;
	username: string;
	password: string;
	firstname: string;
	lastname: string;
	role: string;
}

export class User extends Model {
	static table = 'users';
	static timestamps = true;

	static fields = {
		id: { primaryKey: true, autoIncrement: true },
		username: {type: DataTypes.STRING},
		password: {type: DataTypes.TEXT},
		firstname: {type: DataTypes.STRING},
		lastname: {type: DataTypes.STRING},
		role: {type: DataTypes.STRING},
	};

	static async hashPassword(password: string) {
		const salt = await bcrypt.genSalt(8);
		return bcrypt.hash(password, salt);
	}
}
