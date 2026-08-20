import Image from 'next/image'

export function Avatar() {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4"
      alt="Roberlan Carvalho"
      width={90}
      height={90}
      className="rounded-full"
    />
  )
}
