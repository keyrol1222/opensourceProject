import React from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Container, ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [init, setInit] = useState(false);
    const navigate = useNavigate();

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
       
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    localStorage.removeItem("token");

  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#111827",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  return (
    <>
 {init && (
          <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
        )}
    <div className="flex min-h-full flex-1 relative">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-10 w-auto"
              src="./logo.png"
              alt="Your Company"
            />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-white">
              Ingresa en tu cuenta
            </h2>
            {/* <p className="mt-2 text-sm leading-6 text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-white">
                      Recordar
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Olvido su contraseña?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      console.log("Login");
                      navigate("/item");
                      localStorage.setItem("token", "1234");
                    }}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ingresar
                  </button>
                </div>
              </form>
            </div>

            
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="./Illustration-PNG.png"
          alt=""
        />
      </div>
    </div>
  </>
  )
}
