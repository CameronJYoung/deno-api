import { DataTypes, Model } from '../../deps.ts';

import {User} from './User.ts';

export class Post extends Model {
	static table = 'posts';
	static timestamps = true;

	static fields = {
		Postid: { primaryKey: true, autoIncrement: true },
		username: {type: DataTypes.STRING},
		body: {type: DataTypes.STRING},
	};

	static user() {
		return this.hasOne(User);
	}
}