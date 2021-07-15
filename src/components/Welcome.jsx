import styled from "styled-components";
import MapIcon from '@material-ui/icons/Map';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import ShareIcon from '@material-ui/icons/Share';
import TodayIcon from '@material-ui/icons/Today';
import WeekendIcon from '@material-ui/icons/Weekend';
import SupervisorAccountIcon  from '@material-ui/icons/SupervisorAccount';


export default function Welcome() {
    return(
        <Wrapper>
        <Header><h2>This is Family</h2><h1>This is Falendar</h1></Header>
        <Main>
            <Sidebar>
                <WeekendIcon />
                <h3>Easy Use</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <MapIcon />
                <h3>Share locations for every event</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <ShareIcon />
                <h3>Link Multiple accounts</h3>
                <TodayIcon />
            </Sidebar>
            <Info>
                <br></br>
                <br></br>
                <SupervisorAccountIcon />
                <h3>Built with family in mind</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <PersonAddIcon />
                <h3>Add multiple members to the same schedule</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <PhonelinkIcon />
                <h3>Compatible with both webpage and iOs</h3>
            </Info>
        </Main>
        <Footer><h4>seir-503</h4>🤘</Footer>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: #FFADAD;

`
const Header = styled.div`
    
`
const Main = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    padding: 20px 0px;

`

const Sidebar = styled.div`
    background-color: #FFECA9;
    padding: 40px 80px;

`
const Info = styled.div`
    background-color: #83BCFF;
    padding: 40px 80px;
`
const Footer = styled.div`

`