"use client";
import { useSearchParams } from 'next/navigation';
import { ArrowUturnLeftIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { UserIcon, UserGroupIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export function DetailPage (): React.JSX.Element {
  const searchParams = useSearchParams();
  const name: string = searchParams.get('name') || '';
  const username: string = searchParams.get('username') || '';
  const email: string = searchParams.get('email') || '';
  const city: string = searchParams.get('city') || '';
  const street: string = searchParams.get('street') || '';
  const phrase: string = searchParams.get('phrase') || '';
  const company: string = searchParams.get('company') || '';

  return (
    <section className='container mx-auto place-content-center w-full max-w-sm'>
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <UserIcon className="w-full h-40 object-cover object-center bg-indigo-100 text-gray-500" />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <BuildingOffice2Icon className="size-7 text-white" />
          <h5 className="mx-3 text-white font-semibold text-md">{company}</h5>
        </div>
        <div className="py-4 px-6">
          <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
          <p className="py-2 text-lg text-gray-700">
            {phrase}
          </p>
          <div className="flex items-center mt-4 text-gray-700">
            <UserGroupIcon className="size-5 fill-current" />
            <h1 className="px-2 text-sm">{username}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <MapPinIcon className="size-5 fill-current" />
            <h1 className="px-2 text-sm">{street}, {city}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <EnvelopeIcon className="size-5 fill-current" />
            <h1 className="px-2 text-sm">{email}</h1>
          </div>
        </div>
        <div className="flex mt-4 mb-4 md:mt-6 place-content-center">
          <Link
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            href={{
              pathname: '/users/',
            }}
          >
            <ArrowUturnLeftIcon className='size-4' />
            Volver al listado
          </Link>
        </div>
      </div>

    </section>
  )
}