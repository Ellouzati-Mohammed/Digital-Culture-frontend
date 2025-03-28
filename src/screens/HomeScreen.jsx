import AllDomainsCard from "../components/DomainCard";
import GroupedUserStatsProgression from "../statistics/UserStatistics/UserStatsProgression";
import { Box, Typography, Chip,Button } from "@mui/material";
import {HomeBox,WelcomCardMotivation,WelcomCardMotivationBox,WelcomCardMotivationTitle,WelcomCardMotivationText} from '../styles/HomeStyle'

function HomeScreen(){
    return (
        
        <Box sx={HomeBox}>
            <Box sx={WelcomCardMotivation}>
              <Box sx={WelcomCardMotivationBox}>
                <Typography variant="h2" sx={WelcomCardMotivationTitle}>
                  Explorez le Monde Numérique
                </Typography>
                <Typography variant="h5" sx={WelcomCardMotivationText}>
                  10 Domaines de Connaissance à Découvrir
                </Typography>
              </Box>
            </Box>
            <AllDomainsCard/>
        </Box>
    )
}
export default HomeScreen;