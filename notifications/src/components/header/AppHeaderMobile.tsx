import Image from 'next/image';

import UserHeaderInfo from '@/components/user/UserHeaderInfo'

import styles from './styles/app-header-mobile.module.scss'

export default function AppHeaderMobile() {
  return (
    <div>
      App header Mobile
      <UserHeaderInfo />
      <div>
        <button>add</button>
        <button>
          <Image
            src={"/icon/icon-settings.svg"}
            alt=""
            height={36}
            width={36}
          />
        </button>
      </div>
    </div>
  );
}
