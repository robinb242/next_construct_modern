import Image from 'next/image'


const HouseLogo =() => (
    <Image src="/assets/icons/orangeOnWhiteLogo.png"
      height={144} //desired size needs to have the same aspect ratio as the image
      width={144}
      alt="Construct Modern House Logo"
      />
)
      export default HouseLogo;