import Flex from "./ui/Flex";
import { UserIcon } from "./ui/icons/user";
import { SettingsIcon } from "./ui/icons/settings";
import { KeyHoleIcon } from "./ui/icons/keyhole";
import { GamesIcon } from "./ui/icons/games";
import { ShareIcon } from "./ui/icons/share";

import { Info } from "./Info";

export function InfoRow() {
  return(
    <Flex gap='20px'>
      {dataInfo.map(info => <Info key={info.title} {...info} />)}
    </Flex>
  )
}


const dataInfo =
[ {
    icon: <UserIcon/>,
    title: '14',
    subtitle: 'IAM Users',
    bg: '#42CC5826'
  }, {
    icon: <SettingsIcon/>,
    title: '91',
    subtitle: 'IAM Roles',
    bg: '#273B4A'
  },
  {
    icon: <KeyHoleIcon/>,
    title: '72',
    subtitle: 'IAM Policies',
    bg: '#F25D5D26'
  },
  {
    icon: <ShareIcon/>,
    title: '35',
    subtitle: 'Compute Resources',
    bg: '#F4A73226'
  },
  {
    icon: <GamesIcon/>,
    title: '21',
    subtitle: 'Games',
    bg: '#9B53F826'
  }
]