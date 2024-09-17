import { AppDataSource } from './data-source';
import { User } from './entity/User';

AppDataSource.initialize()
	.then(async () => {
		console.log('Inserting a new user into the database...');
		const user = new User();
		user.first_name = 'Timber';
		user.last_name = 'Saw';
		user.phone_number = '+4455667790';
		user.country = 'Singapore';
		user.email = 'timber.saw@example.com';
		await AppDataSource.manager.save(user);
		console.log('Saved a new user with id: ' + user.user_id);

		console.log('Loading users from the database...');
		const users = await AppDataSource.manager.find(User);
		console.log('Loaded users: ', users);

		console.log('Here you can setup and run express / fastify / any other framework.');
	})
	.catch((error) => console.log(error));
