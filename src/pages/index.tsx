import 'react-toastify/dist/ReactToastify.css';

import { Card } from '@material-tailwind/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FadeIn } from 'react-slide-fade-in';
import { toast, ToastContainer } from 'react-toastify';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import Typed from 'typed.js';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { particlesConfig } from '@/utils/particlesConfig';

const Index = () => {
  const router = useRouter();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const [prank, setPrank] = useState(false);
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ['&nbsp;rants', '&nbsp;thanks', '&nbsp;questions', 'thing'],
      typeSpeed: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const ref = useRef(null);

  const handleSend = async (message) => {
    await axios
      .post(
        AppConfig.backend,
        {
          message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'application/json',
          },
        }
      )
      .then((ret) => {
        if (ret.data.message === '200') {
          toast('Sent!!!!!!');
        } else {
          toast('Bruh, Hocky surely did a mistake :(');
        }
      })
      .catch((err) => {});
  };

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
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="mx-auto flex w-full max-w-screen-md content-center justify-center text-center">
        <img
          className="unselectable z-10 m-5 mt-10 h-[25vh] select-none p-0"
          src={`${router.basePath}/assets/tree.gif`}
          alt={'Medigle logo'}
        ></img>
      </div>
      <div
        className={
          'mx-auto flex w-[70vw] max-w-xl flex-col content-center justify-center align-middle'
        }
      >
        <div
          className={
            'flex flex-col justify-center text-center text-lg font-bold md:text-3xl'
          }
        >
          <div
            className={'flex flex-col whitespace-pre break-words lg:flex-col'}
          >
            <div>You can</div>
            <div>
              send <a href="https://instagram.com/__hocky">Hocky &#127808;</a>{' '}
              any
              <span ref={typeTarget} />.
            </div>
            <div className={'text-blue-200'}>
              He won&apos;t know your identity,
            </div>
            {prank && (
              <div>
                <FadeIn
                  from="right"
                  positionOffset={100}
                  triggerOffset={300}
                  delayInMilliseconds={0}
                >
                  or will he &#128540;?
                </FadeIn>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex w-[50vw] content-center justify-center place-self-center overflow-auto rounded-xl bg-white p-5 text-center text-xs text-blue-700 lg:w-[30vw] lg:text-lg">
          <form className={'w-full'}>
            <textarea
              ref={ref}
              placeholder="Over here &#128557;"
              className={
                'arial mb-3 w-full border border-blue-600 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
              }
            />
            <button
              onClick={() => {
                setPrank(true);
                handleSend(ref.current.value);
              }}
              type={'button'}
              className={'w-full rounded-lg bg-blue-200 px-3 py-1'}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Main>
  );
};

export default Index;
