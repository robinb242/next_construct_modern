import Image from 'next/image'


const CmTextLogo =() => (
    <Image src="/assets/icons/constructModernTextLogo.svg"
      height={55} //desired size needs to have the same aspect ratio as the image
      width={449}
      alt="Construct Modern Text Logo"
      />
)
      export default CmTextLogo;