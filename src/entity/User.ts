import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	user_id: number;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

	@Column()
	phone_number: string;

	@Column()
	country: string;

	@Column()
	email: string;
}
