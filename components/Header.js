import Image from 'next/image'
import excellaLogo from '../public/excella-logo.svg'

export default function Header({links}){

  return (
    <div>
      <div className="text-center">
        <Image
          alt="Excella Logo"
          src={excellaLogo}
          width={150}
          height={50}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div>
        <h1 className="text-center">
          Xluh.co URL Shortener
        </h1>
      </div>
    </div>
  );
}