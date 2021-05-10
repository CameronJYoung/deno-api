import { DataTypes, Model } from '../../deps.ts';

import {User} from './User.ts';

export class Post extends Model {
	static table = 'posts';
	static timestamps = true;

	static fields = {
		postid: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
		body: {type: DataTypes.STRING},
	};

	static user() {
		return this.hasOne(User);
	}
}
