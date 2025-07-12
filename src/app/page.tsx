'use cache'
import Image from "next/image";
import {CalendarFold, Github, Lightbulb, Mail, MapPin} from "lucide-react";
import {Suspense} from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import GradientDiv from "./components/GradientDiv";
import AnimatedGradientDivider from "@/app/components/AnimatedGradientDivider";
import Link from "next/link";

export default async function Home() {

  return (
    <Suspense>
      <main
        className={'bg-[#090e21] justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-start lg:justify-center items-center'}>
        <MaxWidthWrapper  className={'flex flex-col gap-3 w-full justify-center items-center'}>
          <div className={'lg:w-[700px]'}>
            <div className={'flex flex-col lg:flex-row justify-center gap-3'}>
              <div className={'flex justify-center md:flex-0 flex-col items-center'}>
                <Image
                  src={'/images/cropped-photo2.jpg'}
                  priority={true}
                  alt={'my picture'}
                  width={1000}
                  height={1000}
                  className={'w-[70%] h-full lg:w-[27vh] lg:h-[46vh] object-cover object-center rounded-xl'}
                />
              </div>
              <div className={'px-3 flex flex-col items-center sm:justify-center'}>
                <div className={'bg-gradient-to-t from-gray-400 from-0% to-slate-200 to-100% text-transparent bg-clip-text flex flex-col items-start'}>
                  <div className={'flex flex-col gap-3 rounded-xl border-white'}>
                    <p className={'text-6xl'}>محمد موزیری</p>
                    <p dir={'rtl'} className={'text-3xl direction-rtl'}>برنامه نویس IoT + Front-end</p>
                  </div>
                  <div>
                    <div className={'flex flex-row mt-3'}>
                      <MapPin className={'text-gray-300'}/>
                      <p className={'mx-2 text-lg'}>استان فارس، شهر قیر</p>
                    </div>
                    <div className={'flex flex-row mt-3'}>
                      <CalendarFold className={'text-gray-400'}/>
                      <p className={'ml-2 text-lg'}>سال</p>
                      <p className={' text-lg'}>{new Date().getFullYear() - 2009}</p>
                      <p className={'mx-2 text-lg'}>،متولد 1387</p>
                    </div>
                    <div className={'flex flex-row mt-3'}>
                      <Lightbulb className={'text-gray-400'}/>
                      <p className={'ml-2 text-lg'}>سال خودآموزی</p>
                      <p className={'ml-2 text-lg'}>{new Date().getFullYear() - 2021}</p>
                    </div>
                  </div>
                </div>
                <div className={'flex flex-col mt-12 gap-3 lg:self-start'}>
                  <p className={'flex flex-row gap-2 pr-2 pb-2 rounded-xl'}>
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
                  <p className={'flex flex-row gap-2 pr-2 pb-2 rounded-xl'}>
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
            </div>
            <div className={'w-full h-full flex flex-row justify-end mt-6'}>
              <p className={'mr-3 absolute bg-slate-500 px-2 py-1 rounded-xl'}>تکنولوژی ها</p>
              <GradientDiv className={'h-[20vh]'}>
                <div className="flex flex-row justify-evenly bg-slate-950 rounded-xl w-full h-full text-xl">
                  <div className={'flex flex-col h-full items-center justify-center px-2 gap-y-2 text-slate-400'}>
                    <svg
                      width="85"
                      height="85"
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
                  <div className={'flex flex-col h-full items-center justify-center px-2 gap-y-2 text-slate-400'}>
                    <svg
                      width="85"
                      height="85"
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
                  <div className={'flex flex-col h-full items-center justify-center px-2 gap-y-2 text-slate-400'}>
                    <svg
                      width="85"
                      height="85"
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
                </div></GradientDiv>
            </div>
            <div className={'w-full h-full flex flex-row justify-end mt-10 text-white'}>
              <p className={'mr-5 absolute bg-slate-500 px-2 py-1 rounded-xl'}>پروژه ها</p>
              <GradientDiv>
                <div className="flex flex-col bg-slate-950 shadow-xl rounded-xl w-full h-full pt-10 mb-8">
                  <div className={'w-full flex px-5 flex-row justify-between self-center items-start gap-2 font-black '}
                       style={{direction: 'rtl'}}>
                    <div>
                      <h1 className={'text-2xl'}>
                        پروژه اسکوربورد
                      </h1>
                      <p className={'text-[0.9rem]'}>
                        - ساخت اسکوربورد پیشرفته برای سالن هندبال
                        <br/>
                      </p>
                    </div>
                    <div className={'flex flex-row gap-3'}>
                      <div
                        className={'shadow-slate-400 shadow-md border-[1.5px] border-slate-500 w-11 aspect-square rounded-lg flex items-center justify-evenly flex-col'}>
                        <svg
                          width="31"
                          height="31"
                          className={'mt-1'}
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.087 6.146c-.3 0-.607.017-.907.069-2.532.367-4.23 2.239-5.18 3.674-.95-1.435-2.648-3.307-5.18-3.674a6.49 6.49 0 0 0-.907-.069C2.648 6.146 0 8.77 0 12s2.656 5.854 5.913 5.854c.3 0 .607-.017.916-.069 2.531-.376 4.23-2.247 5.18-3.683.949 1.436 2.647 3.307 5.18 3.683.299.043.607.069.915.069C21.344 17.854 24 15.23 24 12s-2.656-5.854-5.913-5.854zM6.53 15.734a3.837 3.837 0 0 1-.625.043c-2.148 0-3.889-1.7-3.889-3.777 0-2.085 1.749-3.777 3.898-3.777.208 0 .416.017.624.043 2.39.35 3.847 2.768 4.347 3.734-.508.974-1.974 3.384-4.355 3.734zm11.558.043c-.208 0-.416-.017-.624-.043-2.39-.35-3.856-2.768-4.347-3.734.491-.966 1.957-3.384 4.347-3.734.208-.026.416-.043.624-.043 2.149 0 3.89 1.7 3.89 3.777 0 2.085-1.75 3.777-3.89 3.777zm1.65-4.404v1.134h-1.205v1.182h-1.156v-1.182H16.17v-1.134h1.206V10.19h1.156v1.183h1.206zM4.246 12.498H7.82v-1.125H4.245v1.125z"
                            fill="#1A9097"
                          />
                        </svg>
                        <p className={'text-[10px] text-center'}>Arduino</p>
                      </div>
                      <div
                        className={'shadow-slate-400 shadow-md border-[1.5px] border-slate-500 w-11 aspect-square rounded-lg flex items-center justify-evenly flex-col'}>
                        <svg
                          width="31"
                          height="31"
                          className={'mt-1'}
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
                        <p className={'text-[10px] text-center'}>React Native</p>
                      </div>
                    </div>
                  </div>
                  <div className={'w-full flex flex-col gap-2 mt-4 justify-center items-center'}>
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
                    <AnimatedGradientDivider height={0.16}/>
                  </div>
                  <div dir={'rtl'} className={'w-full flex flex-col gap-2 mb-2 mt-3 justify-center items-center'}>
                    <div className={'w-full flex flex-row px-5'}>
                      <div className={'w-full'}>
                        <a target="_blank" href={'https://rim-fims.vercel.app/'} className={'text-2xl text-sky-300'}>
                          ریم فیلمز
                        </a>
                        <p className={'text-[0.9rem]'}>
                          نمایش ویدیو و کاراکتر های سه بعدی گروه ریم فیلمز
                          <br/>
                        </p>
                      </div>
                      <div className={'flex flex-row gap-3'}>
                        <div
                          className={'shadow-slate-400 shadow-md border-[1.5px] border-slate-500 w-11 h-50 rounded-lg flex items-center justify-evenly flex-col'}>
                          <svg
                            width="31"
                            height="31"
                            className={'mt-1'}
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
                              fill="#ffffff"
                            />
                          </svg>
                          <p className={'text-[10px] text-center my-1'}>Next.js</p>
                        </div>
                      </div>
                    </div>
                    <Image
                      src={'/images/rim-films.jpg'}
                      alt={''}
                      priority={true}
                      width={500}
                      height={800}
                      className={'w-[85%] mt-3 object-cover object-center rounded-xl '}
                    />
                  </div>
                  <AnimatedGradientDivider height={0.16}/>
                  <div className={'w-full flex flex-col justify-start items-start gap-2 font-black mt-5'}
                       style={{direction: 'rtl'}}>
                    <div
                      className={'w-full flex px-5 flex-row justify-between self-center items-start gap-2 font-black '}
                      style={{direction: 'rtl'}}>
                      <div>
                        <h1 className={'text-2xl'}>
                          خانه هوشمند
                        </h1>
                        <p className={'text-[0.9rem]'}>
                          روشن یا خاموش کردن چراغ ها یا لوازم خانه - رصد لحظه ای دما
                          <br/>
                        </p>
                      </div>
                      <div className={'flex flex-row gap-3'}>
                        <div
                          className={'shadow-slate-400 shadow-md border-[1.5px] border-slate-500 w-11 aspect-square rounded-lg flex items-center justify-evenly flex-col'}>

                          <svg width="28" height="28" viewBox="0 0 256 300" xmlns="http://www.w3.org/2000/svg"
                               preserveAspectRatio="xMinYMin meet" className={'my-1'}>
                            <g fill="#2BA977">
                              <path
                                d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708 8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717-26.947 0-42.512 16.437-42.512 45.243 0 28.046 14.88 43.532 42.17 43.532 5.896 0 10.696-.332 18.307-1.351v-84.707z"/>
                              <path
                                d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327 7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21zM196.608 0h53.278v54.135h-53.278V0z"/>
                            </g>
                          </svg>

                          <p className={'text-[10px] text-center'}>Django</p>
                        </div>
                      </div>
                    </div>
                    <div className={'w-full flex flex-col gap-2 mt-2 justify-center items-center'}>
                      <Image
                        src={'/images/sm.png'}
                        alt={''}
                        width={500}
                        height={800}
                        className={'w-5/6 object-cover object-center rounded-xl '}
                      />
                      <AnimatedGradientDivider height={0.16}/>
                    </div>


                    <div className={'w-full mb-5 mt-2'}>
                      <div
                        className={'w-full flex px-5  flex-row justify-between self-center items-start gap-2 font-black '}
                        style={{direction: 'rtl'}}>
                        <div>
                          <Link href={'https://RayanElectro.ir'} className={'text-2xl text-sky-300'}>
                            RayanElectro.ir
                          </Link>
                          <p className={'text-[0.9rem]'}>
                            فروش کالاهای دیجیتال
                          </p>
                        </div>
                        <div
                          className={'shadow-slate-400 shadow-md border-[1.5px] border-slate-500 w-11 h-50 rounded-lg flex items-center justify-evenly flex-col'}>
                          <svg
                            width="31"
                            height="31"
                            className={'mt-1'}
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
                              fill="#ffffff"
                            />
                          </svg>
                          <p className={'text-[10px] text-center my-1'}>Next.js</p>
                        </div>
                      </div>
                      <div className={'w-full flex justify-center items-center mt-3 mb-2'}>
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
              </GradientDiv>
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
      <footer
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-[#0A0A0A] pt-7 mb-10 w-full h-full">
        <p className={'text-xl'}>زیبایی در سادگی است</p>
      </footer>
    </Suspense>
  );
}
