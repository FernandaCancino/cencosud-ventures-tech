

import { Suspense } from 'react';
import { CardSkeleton } from '@/app/ui/skeletons';
import { DetailPage } from './detailPage';

export default function Page(): React.JSX.Element {
  return (
    <Suspense
      fallback={
        <CardSkeleton />
      }>
        {<DetailPage />}
    </Suspense>
  )
}

