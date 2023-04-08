import { Header } from '../components/header';
import { Background } from '../components/ui/all';
import { InfoRow } from '../components/InfoRow'
import { Sidebar } from '../components/ui/sidebar'
import { GameStatsRow } from '../components/gameStats'
import { GeneralSales } from '../components/GeneralSales'
import Flex from '../components/ui/Flex';

export const Dashboard = () => (
  <Background color='#111216' gap='34px'>

    <Sidebar />
    
    <Flex display='column' mr='28px' $wrap>
      <Header />

      <InfoRow /> 

      <GameStatsRow />

      <GeneralSales />
    </Flex>

  </Background>
)

