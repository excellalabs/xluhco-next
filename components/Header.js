import Image from 'next/image'
import excellaLogo from '../public/excella-logo.svg'

export default function Header({links}){

  return (
    <div>
      <div className="text-center py-2">
        <Image
          alt="Excella Logo"
          src={excellaLogo}
          width={150}
          height={50}
        />
      </div>
      <div className="text-center py-2">
        <h1>
          Xluh.co URL Shortener
        </h1>
      </div>
    </div>
  );
}