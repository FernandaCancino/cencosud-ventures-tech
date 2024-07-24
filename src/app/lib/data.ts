import { IUser } from "./definitions";

export async function fetchUsers(): Promise<IUser[]> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json: IUser[] = await res.json();
    return json;
  } catch (error) {
    console.log('cannot get users: ', error);
    throw new Error('cannot get users');
  }
}

export function fetchFilteredUsers(users: IUser[], query: string): IUser[] {
  const filteredUser: IUser[] = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
  return filteredUser;
}