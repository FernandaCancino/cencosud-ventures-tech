import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { randomUUID } from 'crypto';
import { IUser } from "../lib/definitions";
import { fetchFilteredUsers, fetchUsers } from '../lib/data';
import { IListUSers, IMessageListFooter, IUserItem } from './listInterfaces';

const MESSAGE_LIST_FOOTER: IMessageListFooter = {
  withData: "Actualizado hace un momento",
  withoutData: "No se encontraron usuarios según el filtro ingresado",
}

export const UserITem = ({ user, index }: IUserItem): React.JSX.Element => (
  <div
    key={randomUUID()}
    className={clsx(
      'flex flex-col sm:flex-row items-center justify-between py-4 hover:bg-gray-100 transition-all rounded-lg',
      {
        'border-t': index !== 0,
      },
    )}
  >
    <div className="flex items-center w-full sm:w-auto p-3 leading-tight text-start">
      <UserIcon className="h-12 w-12 rounded-full bg-indigo-100 text-gray-500 object-cover object-center mr-3" />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold md:text-base">
          {user.name}
        </p>
        <p className="hidden sm:block text-sm text-gray-500">
          {user.email}
        </p>
      </div>
    </div>
    <Link
      className="flex h-[48px] grow sm:grow-0 items-center justify-center gap-2 rounded-md mr-3 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 sm:justify-start sm:p-2 sm:px-3"
      href={{
        pathname: '/users/detail',
        query: {
          city: user.address.city,
          company: user.company.name,
          email: user.email,
          name: user.name,
          phrase: user.company.catchPhrase,
          street: user.address.street,
          username: user.username,
        },
      }}
    >
      Ver detalle
    </Link>
  </div>
);

export default async function ListUSers({ query = "" }: IListUSers): Promise<React.JSX.Element> {
  const users: IUser[] = await fetchUsers();
  const listUsers: IUser[] = fetchFilteredUsers(users, query);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-4 rounded-xl">
      <div className="w-full max-w-4xl flex flex-col justify-between rounded-xl bg-white shadow-md p-6 overflow-hidde">
        <div className="overflow-y-auto max-h-screen">
          {listUsers.map((user: IUser, index: number) => UserITem({ user, index }))}
        </div>

        <div className="flex items-center pb-2 pt-6">
          <h3 className="ml-2 text-sm text-gray-500">
            {listUsers.length === 0 ? MESSAGE_LIST_FOOTER.withoutData : MESSAGE_LIST_FOOTER.withData}
          </h3>
        </div>
      </div>
    </div>
  );
}
