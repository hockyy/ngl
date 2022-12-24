import Decimal from 'decimal.js';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  const [mini, setMini] = useState('99');
  useEffect(() => {
    setInterval(() => {
      setMini((old) => {
        return new Decimal(Math.max(parseFloat(old) - 0.2, 80)).toFixed(1);
      });
    }, 10000);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col content-center justify-between overflow-hidden text-gray-200 antialiased">
      {props.meta}

      <div className="max-w-screen-xl place-self-center">
        <div className="content w-full pb-5 text-xl ">{props.children}</div>
      </div>
      <img
        className={'unselectable fixed z-10 min-w-[500px] overflow-hidden'}
        src={`${router.basePath}/assets/snow.png`}
        alt={'Snowpile'}
        style={{ top: `${mini}vh` }}
      ></img>
      <div className="py-8 px-4 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://instagram.com/__hocky"> Hocky Yudhiono 🍀</a>.
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
