import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const Index = () => (
  <div className="p-4 bg-white rounded shadow">
    <h1 className="text-2xl font-bold">Next.js</h1>
    <p className="text-gray-500">
      with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method for
      production builds.
    </p>

    <BottomSwipeable />
  </div>
);

const BottomSwipeable = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [botherable, setBotherable] = useState(true);

  const [localBotherable, setLocalBotherable] = useState(botherable);

  const [showContextMenu, setShowContextMenu] = useState(false);

  return (
    <div class="absolute bottom-0 left-0  w-full  text-white background-gray">
      <div class="flex flex-col">
        {/* bottom menu / partial */}
        <div
          class="flex flex-row justify-between p-3"
          onClick={() => setShowFullMenu(!showFullMenu)}
        >
          <div class="flex flex-row">
            <div class="p-1">😀</div>
            <div class="p-1">Marcus</div>
          </div>

          {botherable ? (
            <div class="bg-green-900 bg-opacity-75 h-5 w-5 m-1 rounded-lg flex">
              <div class="bg-green-300 h-2 w-2 m-auto rounded-full flex justify-center"></div>
            </div>
          ) : (
            <div class="bg-red-900 bg-opacity-75 h-5 w-5 m-1 rounded-lg flex">
              <div class="bg-red-700 h-2 w-2 m-auto rounded-full flex justify-center"></div>
            </div>
          )}
        </div>

        {/* Remaining part of menu */}
        <CSSTransition
          in={showFullMenu}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <div>
            <div class="h-px bg-gray-900"></div>
            <div class="p-1 flex flex-col p-3">
              <span class="text-gray-600">Status update:</span>
              <div class="flex flex-row justify-between py-2">
                <span>Set status to</span>

                <div
                  class={`${
                    localBotherable
                      ? 'text-green-500 bg-green-900'
                      : 'text-red-500 bg-red-900'
                  } bg-opacity-75 rounded-full px-2 font-bold`}
                  onClick={() => setLocalBotherable(!localBotherable)}
                >
                  {localBotherable ? 'botherable' : 'unbotherable'}
                </div>
              </div>

              <div
                class="flex flex-row justify-between  py-2"
                onClick={() => setShowContextMenu(!showContextMenu)}
              >
                <span>Context</span>

                <div class="text-gray-500 bg-gray-700 bg-opacity-75 rounded-full px-2 font-bold">
                  none
                </div>
              </div>

              <div class="flex flex-row justify-between  py-2">
                <span>Duration</span>

                <div class="text-gray-500 bg-gray-700 bg-opacity-75 rounded-full px-2 font-bold">
                  a while
                </div>
              </div>

              <div class="flex flex-row justify-between  py-2">
                <button
                  class={`p-2  w-full rounded-lg ${
                    localBotherable
                      ? 'bg-green-400 hover:bg-green-600'
                      : 'bg-red-400 hover:bg-red-600'
                  }`}
                  onClick={() => {
                    setBotherable(localBotherable);
                    setShowFullMenu(false);
                  }}
                >
                  Update status
                </button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>

      <CSSTransition
        in={showContextMenu}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div class="absolute bottom-0 left-0  w-full">
          <div class="absolute bottom-0 left-0  w-full  bg-black opacity-75 z-40 h-screen"></div>

          <div class="absolute bottom-0 left-0 right-0 m-3 p-2 background-gray rounded-lg z-50">
            <div class="flex flex-col">
              <div class="flex flex-row justify-between py-2">
                <button class="text-red-500 bg-red-700 bg-opacity-25 rounded-full px-2 font-bold">
                  clear
                </button>
                <button class="text-blue-500 bg-blue-700 bg-opacity-25 rounded-full px-2 font-bold" onClick={() => setShowContextMenu(false)}>
                  done
                </button>
              </div>

              <div class="flex flex-row justify-between py-2">
                <div class="bg-gray-800 rounded-lg w-full p-2 flex flex-row justify-between align-center">
                  <div class="flex flex-row">
                    <svg
                      class="h-6 w-6 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        clip-rule="evenodd"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>

                    <span>I need silence.</span>
                  </div>

                  <div class="flex w-4 justify-center items-center">
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-row justify-between py-2">
                <div class="bg-gray-800 rounded-lg w-full p-2 flex flex-row justify-between align-center">
                  <div class="flex flex-row">
                    <svg
                      class="h-6 w-6 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                      />
                    </svg>

                    <span>I'm on a phone call.</span>
                  </div>

                  <div class="flex w-4 justify-center items-center">
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-row justify-between py-2">
                <div class="bg-gray-800 rounded-lg w-full p-2 flex flex-row justify-between align-center">
                  <div class="flex flex-row">
                    <svg
                      class="h-6 w-6 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span>I'm on a video call.</span>
                  </div>

                  <div class="flex w-4 justify-center items-center">
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-row justify-between py-2">
                <div class="bg-gray-800 rounded-lg w-full p-2 flex flex-row justify-between align-center">
                  <div class="flex flex-row">
                    <svg
                      class="h-6 w-6 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M20 2.5V0L6 2v12.17A3 3 0 0 0 5 14H3a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3V5.71L18 4.3v7.88a3 3 0 0 0-1-.17h-2a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3V2.5z" />
                    </svg>

                    <span>I've got headphones on.</span>
                  </div>

                  <div class="flex w-4 justify-center items-center">
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-row justify-between py-2">
                <div class="bg-gray-800 rounded-lg w-full p-2 flex flex-row justify-between align-center">
                  <div class="flex flex-row">
                    <svg
                      class="h-6 w-6 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 6a6 6 0 0 0-11.32 0h11.32z" />{' '}
                    </svg>

                    <span>I'm super stressed.</span>
                  </div>

                  <div class="flex w-4 justify-center items-center">
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-row justify-between py-2">
                <div class="bg-gray-800 rounded-lg w-full p-2 flex flex-row justify-between align-center">
                  <div class="flex flex-row">
                    <svg
                      class="h-6 w-6 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        clip-rule="evenodd"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>

                    <span>I'm taking a nap.</span>
                  </div>

                  <div class="flex w-4 justify-center items-center">
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Index;
