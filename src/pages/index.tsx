import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import Typed from 'typed.js';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { particlesConfig } from '@/utils/particlesConfig';

const Index = () => {
  const router = useRouter();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [' Personalized', ' Premium', ' Only'],
      typeSpeed: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Main meta={<Meta title="Not Gonna Lie!" description="Hush" />}>
      <Particles
        className={'fixed z-[-1]'}
        id="tsparticles"
        init={particlesInit}
        /*
            // @ts-ignore */
        options={particlesConfig}
      />
      <div className="mx-auto flex w-full max-w-screen-md content-center justify-center text-center">
        <a
          href={'/'}
          className="mx-auto flex w-[70vw] max-w-xl content-center items-center justify-center pt-16 pb-8 text-center"
        >
          <img
            className="z-10 m-0 p-0"
            src={`${router.basePath}/assets/qs-world.png`}
            alt={'Medigle logo'}
          ></img>
        </a>
      </div>
      <div
        className={
          'mx-auto flex w-[70vw] max-w-xl content-center justify-center align-middle'
        }
      >
        <div
          className={
            'flex flex-row justify-center text-center text-2xl font-bold sm:text-4xl'
          }
        >
          <div
            className={'flex flex-col whitespace-pre break-words lg:flex-row'}
          >
            <div>
              The <span ref={typeTarget} />
            </div>
            <div className={'text-amber-700'}> QS World Semantic Web </div>
            <div>Search Engine</div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-screen-md content-center justify-center text-center">
        <a
          className={
            'mt-[10vh] rounded-xl bg-amber-400/30 px-6 py-2 text-xl font-bold shadow sm:px-10 sm:py-5 sm:text-2xl'
          }
          href={'/search'}
        >
          🚀 Start Now
        </a>
      </div>
    </Main>
  );
};

export default Index;
