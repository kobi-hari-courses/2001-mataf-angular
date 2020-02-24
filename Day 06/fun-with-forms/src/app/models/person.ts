import { Address } from './address';
export interface Person {
    username: string;
    fullName: string;
    email: string; 
    address: Address; 
    aliases: string[]  
}