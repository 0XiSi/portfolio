import {Github} from "lucide-react";

export default function ViewRepo({repoName}:{repoName:string}) {



  return (
    <div className={'w-full flex items-start px-5'}>
      <p className={'flex flex-row gap-2 pr- pb-2 rounded-xl'}>
        <Github size={30}/>
        <a
          className="flex items-center font-normal hover:underline hover:underline-offset-2"
          href={"https://github.com/0XiSi/" + repoName}
          target="_blank"
          rel="noopener noreferrer"
        >
          نمایش کد
        </a>
      </p>
    </div>
  )
}