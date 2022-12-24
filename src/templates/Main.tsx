import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between content-center overflow-hidden w-full text-gray-700 antialiased min-h-screen">
      {props.meta}

      <div className="max-w-screen-xl place-self-center">
        <div className="content w-full pb-5 text-xl ">{props.children}</div>
      </div>
      <div className="py-8 text-center text-sm px-4">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by{' '}
        <a href="https://instagram.com/__hocky"> Hocky Yudhiono 🍀</a>.
        Repository setup by{' '}
        <a href="https://creativedesignsguru.com"> CreativeDesignsGuru</a>.
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  );
};

export { Main };
