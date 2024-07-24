import { Suspense } from "react";
import ListUSers from "./list";
import { CardSkeleton } from "../ui/skeletons";
import Search from "../ui/search";

interface IPage {
  searchParams?: {
    query?: string;
  }
}

export default async function Page({ searchParams }: IPage): Promise<JSX.Element> {

  const query = searchParams?.query || '';
  console.log('query: ', query);

  return (
    <section className="break-before-column md:w-3/4">
      <h2 className={`mb-4 text-xl md:text-2xl text-center`}>
        Lista de Usuarios
      </h2>
      <Suspense
        key={query}
        fallback={
          <CardSkeleton />
        }>
        <Search placeholder={"Buscar usuario"} />
        <ListUSers query={query} />
      </Suspense>
    </section>
  )
}