'use client';

import { useParams } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '../../../i18n/routing';

const LocaleSwitcher = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label
      className={`
        'relative text-gray-400',
        ${isPending && 'transition-opacity [&:disabled]:opacity-30'}
      `}
    >
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue='ru'
        disabled={isPending}
        onChange={onSelectChange}
      >
        <option value='ru'>Ру</option>
        <option value='uz'>Uz</option>
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}

export default LocaleSwitcher;