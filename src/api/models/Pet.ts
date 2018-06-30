import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './User';

@Entity()
export class Pet {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public age: number;

    @Column({ nullable: true })
    public userId: string;

    @ManyToOne(type => User, user => user.pets)
    @JoinColumn({ name: 'userId' })
    public user: User;

    public toString(): string {
        return `${this.name}`;
    }

}
