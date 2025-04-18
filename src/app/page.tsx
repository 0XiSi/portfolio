'use cache'
import Image from "next/image";
import {CalendarFold, Github, Lightbulb, Mail, MapPin} from "lucide-react";
import {Suspense} from "react";

export default async function Home() {

  return (
    <Suspense>
      <main
        className={'bg-slate-950 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-start md:justify-center items-center'}>
        <div className={'flex flex-col gap-3 w-3/2'}>
          <div className={'flex flex-row justify-center gap-5'}>
            <div>
              <p className={'absolute -rotate-45 bg-slate-600 px-2 py-1 rounded-xl'}>آزاد برای کار</p>
              <Image
                src={'/images/cropped-photo.jpg'}
                priority={true}
                alt={'photo'}
                width={1000}
                height={1000}
                className={'w-[25vh] md:h-[46vh] object-cover object-center rounded-xl'}
              />
            </div>
            <div className={'px-3 text-gray-400'}>
              <div
                className={'bg-gradient-to-t from-gray-400 from-0% to-slate-200 to-100% text-transparent bg-clip-text  flex flex-col items-start'}>
                <div className={'flex flex-col gap-3 rounded-xl border-white'}>
                  <p className={'text-6xl'}>محمد موزیری</p>
                  <p className={'text-3xl'}>برنامه نویس فول استک</p>
                </div>
                <div>
                  <div className={'flex flex-row mt-3'}>
                    <MapPin className={'text-gray-300'}/>
                    <p className={'mx-2 text-lg'}>استان فارس، شهر قیر</p>
                  </div>
                  <div className={'flex flex-row mt-3'}>
                    <CalendarFold className={'text-gray-400'}/>
                    <p className={'ml-2 text-lg'}>سال</p>
                    <p className={' text-lg'}>{new Date().getFullYear() - 2008}</p>
                    <p className={'mx-2 text-lg'}>،متولد 1387</p>
                  </div>
                  <div className={'flex flex-row mt-3'}>
                    <Lightbulb className={'text-gray-400'}/>
                    <p className={'ml-2 text-lg'}>سال خودآموزی</p>
                    <p className={'ml-2 text-lg'}>{new Date().getFullYear() - 2021}</p>
                  </div>
                </div>
              </div>
              <p className={'flex flex-row gap-2 mt-12 pr-2 pb-2 rounded-xl'}>
                <Github size={30}/>
                <a
                  className="flex items-center font-mono font-normal hover:underline hover:underline-offset-2"
                  href="https://github.com/0XiSi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/0XiSi/
                </a>
              </p>
              <p className={'flex flex-row gap-2 mt-3 pr-2 pb-2 rounded-xl '}>
                <Mail size={30}/>
                <a
                  className="flex items-center font-mono font-normal hover:underline hover:underline-offset-2"
                  href="mailto:mozirimohhamad1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mozirimohhamad1@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={'w-full h-full flex flex-row justify-end '}>
            <p className={'mr-3 absolute bg-slate-500 px-2 py-1 rounded-xl'}>تکنولوژی ها</p>
            <div
              className="flex justify-evenly w-full h-[20vh] mt-3 p-[2px] bg-gradient-to-bl from-slate-500 to-slate-950 to-70% rounded-xl">
              <div className="flex flex-row justify-evenly bg-slate-950 rounded-xl w-full h-full">
                <div className={'flex flex-col h-full items-center justify-center px-2 gap-2 text-slate-500'}>
                  <svg
                    width="65"
                    height="65"
                    className={''}
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
                      fill="#ffffff"
                    />
                  </svg>
                  <p>Next.js</p>
                </div>
                <div className={'flex flex-col h-full items-center justify-center px-2 gap-2 text-slate-500'}>
                  <svg
                    width="65"
                    height="65"
                    className={''}
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.087 6.146c-.3 0-.607.017-.907.069-2.532.367-4.23 2.239-5.18 3.674-.95-1.435-2.648-3.307-5.18-3.674a6.49 6.49 0 0 0-.907-.069C2.648 6.146 0 8.77 0 12s2.656 5.854 5.913 5.854c.3 0 .607-.017.916-.069 2.531-.376 4.23-2.247 5.18-3.683.949 1.436 2.647 3.307 5.18 3.683.299.043.607.069.915.069C21.344 17.854 24 15.23 24 12s-2.656-5.854-5.913-5.854zM6.53 15.734a3.837 3.837 0 0 1-.625.043c-2.148 0-3.889-1.7-3.889-3.777 0-2.085 1.749-3.777 3.898-3.777.208 0 .416.017.624.043 2.39.35 3.847 2.768 4.347 3.734-.508.974-1.974 3.384-4.355 3.734zm11.558.043c-.208 0-.416-.017-.624-.043-2.39-.35-3.856-2.768-4.347-3.734.491-.966 1.957-3.384 4.347-3.734.208-.026.416-.043.624-.043 2.149 0 3.89 1.7 3.89 3.777 0 2.085-1.75 3.777-3.89 3.777zm1.65-4.404v1.134h-1.205v1.182h-1.156v-1.182H16.17v-1.134h1.206V10.19h1.156v1.183h1.206zM4.246 12.498H7.82v-1.125H4.245v1.125z"
                      fill="#1A9097"
                    />
                  </svg>
                  <p>Arduino</p>
                </div>
                <div className={'flex flex-col h-full items-center justify-center px-2 gap-2 text-slate-500'}>
                  <svg
                    width="65"
                    height="65"
                    className={'items-center justify-center'}
                    role="img"
                    viewBox="0 0 27 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="m15.902 11.974c0 1.331-1.079 2.41-2.41 2.41s-2.41-1.079-2.41-2.41 1.079-2.41 2.41-2.41 2.41 1.079 2.41 2.41z"
                          fill="#53C1DE"
                    />
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="m13.491 17.494c-.201.005-.438.008-.676.008-2.811 0-5.522-.425-8.073-1.214l.193.051c-1.351-.436-2.522-1.079-3.541-1.903l.021.016c-.789-.571-1.32-1.455-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172 2.512-.827 5.403-1.304 8.405-1.304.139 0 .278.001.417.003h-.021c.116-.002.252-.003.389-.003 2.965 0 5.82.469 8.496 1.337l-.195-.055c1.305.424 2.438 1.036 3.433 1.814l-.024-.018c.775.546 1.298 1.404 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374-2.363.729-5.08 1.149-7.895 1.149-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087 0 .893 1.301 2.3 4.153 3.274 2.249.697 4.834 1.099 7.513 1.099.235 0 .469-.003.702-.009l-.034.001c.146.003.318.005.49.005 2.684 0 5.274-.4 7.715-1.143l-.187.049c2.96-.984 4.32-2.391 4.32-3.28-.102-.638-.462-1.176-.966-1.515l-.008-.005c-.866-.674-1.876-1.217-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208-.142 0-.283.001-.424.003h.021z"
                          fill="#53C1DE"
                    />
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="m8.023 23.986c-.016 0-.035.001-.053.001-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141.697-3.128 1.827-5.894 3.344-8.4l-.069.124c1.499-2.655 3.31-4.926 5.425-6.872l.02-.018c.923-.844 2.003-1.537 3.187-2.028l.073-.027c.407-.196.885-.31 1.39-.31.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013c-.958.877-2.083 1.59-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zm1.205-14.447.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926.191.102.417.161.657.161.02 0 .041 0 .061-.001h-.003c.955 0 2.458-.605 4.196-2.122 1.976-1.867 3.654-4.023 4.972-6.404l.068-.135c1.318-2.156 2.371-4.653 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378-.238-.094-.514-.148-.802-.148-.364 0-.708.087-1.012.24l.013-.006c-1.118.465-2.078 1.086-2.907 1.846l.007-.006c-2.041 1.881-3.772 4.057-5.136 6.468l-.069.132z"
                          fill="#53C1DE"
                    />
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="m18.96 24c-1.306 0-2.96-.787-4.69-2.276-2.175-1.983-4.017-4.282-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185c-.162-.709-.255-1.522-.255-2.357 0-.527.037-1.044.108-1.551l-.007.058c.085-.998.608-1.858 1.372-2.399l.01-.007c1.43-.83 3.865.024 6.342 2.228 2.022 1.914 3.748 4.113 5.118 6.54l.072.138c1.428 2.297 2.557 4.961 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36 0 .577-.044 1.143-.13 1.696l.008-.062c-.103 1.022-.644 1.901-1.429 2.456l-.011.007c-.348.199-.764.316-1.207.316-.018 0-.036 0-.054-.001h.003zm-9.228-9.823c1.458 2.571 3.217 4.771 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834.773-.446 1.339-2.276.754-5.233-.702-2.89-1.787-5.434-3.219-7.741l.065.112c-1.379-2.456-3.027-4.562-4.948-6.384l-.012-.011c-2.334-2.074-4.225-2.54-4.998-2.094-.473.385-.784.952-.825 1.593v.007c-.055.39-.086.84-.086 1.298 0 .757.086 1.493.248 2.201l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z"
                          fill="#53C1DE"
                    />
                  </svg>
                  <p>React Native</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'w-full h-full flex flex-row justify-end mt-10'}>
            <p className={'mr-5 absolute bg-slate-500 px-2 py-1 rounded-xl'}>پروژه ها</p>
            <div
              className="flex justify-evenly w-full mt-3 p-[2px] bg-gradient-to-bl from-slate-500 to-slate-950 to-70% transition-colors duration-500 ease-in-out hover:bg-slate-700 rounded-xl">
              <div className="flex flex-col justify-evenly bg-slate-950 rounded-xl w-full h-full pt-10">
                <div className={'w-full flex pr-5 flex-col justify-start items-start gap-2 font-black'}
                     style={{direction: 'rtl'}}>
                  <h1 className={'text-2xl'}>
                    پروژه اسکوربورد
                  </h1>
                  <p className={'text-[0.9rem]'}>
                    - ساخت اسکوربورد پیشرفته برای سالن هندبال
                    <br/>
                    پردازش و نمایش در تابلو با استفاده از Esp8266 و کنترل تابلو با گوشی (React Native) یا کامپیوتر
                    (Tkinter)
                  </p>
                </div>
                <div className={'w-full flex flex-col gap-2 mt-5 justify-center items-center'}>
                  <Image
                    src={'/images/scoreboard-android.jpg'}
                    alt={''}
                    priority={true}
                    width={500}
                    height={800}
                    className={'w-[85%] object-cover object-center rounded-xl '}
                  />
                  <Image
                    src={'/images/scoreboard-pc.jpg'}
                    alt={''}
                    width={500}
                    height={800}
                    className={'w-5/6 object-cover object-center'}
                  />
                  <div className={'border-0 h-[0.1rem] w-full bg-gradient-to-l from-slate-600 from-10%'}/>
                </div>
                <div className={'w-full flex pr-5 flex-col justify-start items-start gap-2 font-black mt-5'}
                     style={{direction: 'rtl'}}>

                  <h1 className={'text-2xl'}>
                    خانه هوشمند
                  </h1>
                  <p className={'text-[0.9rem]'}>
                    بک اند DRF سویچ و سنسور ها با Esp8266 . روشن یا خاموش کردن سویچ ها و رصد سنسور های هوشمند در خانه.
                    <br/>
                    - نمایش لحظه ای دمای سنسور
                  </p>
                </div>
                <div className={'w-full flex flex-col gap-2 mt-5 justify-center items-center'}>
                  <Image
                    src={'/images/sm.png'}
                    alt={''}
                    width={500}
                    height={800}
                    className={'w-5/6 object-cover object-center rounded-xl '}
                  />
                  <div className={'border-0 h-[0.1rem] w-full bg-gradient-to-l from-slate-600 from-10%'}/>
                </div>

                <div className={'w-full flex pr-5 flex-col justify-start items-start gap-2 font-black mt-6'}
                     style={{direction: 'rtl'}}>
                  <a
                    className="flex items-center text-2xl hover:underline hover:underline-offset-2"
                    href="https://RayanElectro.ir/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RayanElectro.ir
                  </a>
                  <p className={'text-[0.9rem]'}>
                    سایت فروش ساعت و اسکوربورد دیجیتال
                    ساخته شده با Next.js و RadixToolkit
                  </p>

                </div>
                <div className={'w-full flex mt-5 mb-10 justify-center items-center'}>
                  <Image
                    src={'/images/re.png'}
                    alt={''}
                    width={1000}
                    height={1000}
                    className={'w-5/6 object-cover object-center rounded-xl '}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-[#0A0A0A] pt-7 mb-10 w-full h-full">
        <p className={'text-xl'}>💖</p>
      </footer>
    </Suspense>
  );
}
