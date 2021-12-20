
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column(({ default: 0 }))
  userRole: Number;

  @Column({ default: false })
  isActive: boolean;
  
  // constructor(firstNamet: string, lastName: string, id?: number, isActiv?: boolean ) {
    
  //   this.id = id;
  //   this.firstName = this.firstName;
  //   this.lastName = this.lastName;
  //   this.isActive = this.isActive;
  // }
}