import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
/**
 * Creating the user Entity to manage the table in database
 */
@Entity({ name: 'users'}) //Name in database recommended plural naming
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, unique: true }) //The same username
  email: string;

  @Column()
  password: string;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 100 })
  address: string;

  @Column()
  city: string;

  @Column({length: 50})
  phone: string;

  @Column()
  isAdmin: boolean;

  @Column({type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @Column({nullable: true})
  authStrategy: string;
}
