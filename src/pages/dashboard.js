import { Header } from '../components/header';
import { Background, Title } from '../components/ui/all';
import { InfoRow } from '../components/InfoRow'
import { Sidebar } from '../components/ui/sidebar'
import { GameStatsRow } from '../components/gameStats'
import Flex from '../components/ui/Flex';

export const Dashboard = () => {
  return (
    <> 
      <Background color='#111216' gap='34px'>

        <Sidebar />
        
        <Flex display='column' mr='28px'>
          <Header />

          <InfoRow /> 

          <GameStatsRow />
        </Flex>

      </Background>
    </>
  )
}
