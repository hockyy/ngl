import {useRouter} from 'next/router';
import {useCallback, useEffect, useRef} from 'react';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import type {Engine} from 'tsparticles-engine';
import Typed from 'typed.js';
import {Meta} from '@/layouts/Meta';
import {Main} from '@/templates/Main';
import {particlesConfig} from '@/utils/particlesConfig';

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
    <Main
      meta={
        <Meta
          title="Not Gonna Lie!"
          description="Hush"
        />
      }
    >
      <Particles
        className={'z-[-1] fixed'}
        id="tsparticles"
        init={particlesInit}
        /*
            // @ts-ignore */
        options={particlesConfig}
      />
      <div className="flex justify-center text-center content-center max-w-screen-md w-full mx-auto">
        <a
          href={'/'}
          className="w-[70vw] max-w-xl mx-auto flex pt-16 pb-8 content-center items-center text-center justify-center"
        >
          <img
            className="z-10 p-0 m-0"
            src={`${router.basePath}/assets/qs-world.png`}
            alt={'Medigle logo'}
          ></img>
        </a>
      </div>
      <div
        className={
          'flex w-[70vw] max-w-xl justify-center content-center align-middle mx-auto'
        }
      >
        <div
          className={
            'flex flex-row justify-center text-center font-bold text-2xl sm:text-4xl'
          }
        >
          <div
            className={'flex flex-col lg:flex-row break-words whitespace-pre'}
          >
            <div>
              The <span ref={typeTarget} />
            </div>
            <div className={'text-amber-700'}> QS World Semantic Web </div>
            <div>Search Engine</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center content-center max-w-screen-md w-full mx-auto">
        <a
          className={
            'text-xl sm:text-2xl mt-[10vh] font-bold shadow px-6 py-2 sm:px-10 sm:py-5 rounded-xl bg-amber-400/30'
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
