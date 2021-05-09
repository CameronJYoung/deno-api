import { DataTypes, Model, hash, genSalt } from '../../deps.ts';

import {Post} from './Post.ts';

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
		Userid: { primaryKey: true, autoIncrement: true },
		username: {type: DataTypes.STRING},
		password: {type: DataTypes.TEXT},
		firstname: {type: DataTypes.STRING},
		lastname: {type: DataTypes.STRING},
		role: {type: DataTypes.STRING},
	};

	static posts() {
		return this.hasMany(Post);
	}

	static async hashPassword(password: string) {
		const salt = await genSalt(8);
		return hash(password, salt);
	}
}
