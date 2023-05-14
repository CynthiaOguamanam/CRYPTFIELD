import React from 'react';
import {
    Container, Wrapper, Gif, Top, Line,
    H1, P, Wrap, Left, Gif2
} from './Land8Style';
import twist from '../../../Assets/twist.png'
import twist2 from '../../../Assets/twist2.png'
import {RiTeamLine} from 'react-icons/ri'
import {BsBookmarkCheck} from 'react-icons/bs'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {GiCheckeredFlag} from 'react-icons/gi'

const Land8 = () => {
  return (
    <Container>
            <Gif2>
                <Gif style={{marginBottom: "150px", width: "30rem"}} src={twist2}/>
            </Gif2>
            
            <Wrap>
                <Wrapper>
                <Top>
                <BsBookmarkCheck style={{color: "#2A203B",width: 75, height: 75}}/>
                    <Left>
                        <Line></Line>
                        <H1>2.6k</H1>
                    </Left>
                </Top>
                <P>Gave insurances</P>
                </Wrapper>
                <Wrapper>
                <Top>
                    <RiTeamLine style={{color: "#2A203B",width: 75, height: 75}}/>
                    <Left>
                        <Line></Line>
                        <H1>500+</H1>
                    </Left>
                </Top>
                <P>Professional team</P>
                </Wrapper>
                <Wrapper>
                <Top>
                <AiFillSafetyCertificate style={{color: "#2A203B",width: 75, height: 75}}/>
                    <Left>
                        <Line></Line>
                        <H1>2.8k</H1>
                    </Left>
                </Top>
                <P>$40M+ market cap</P>
                </Wrapper>
                <Wrapper>
                <Top>
                <GiCheckeredFlag style={{color: "#2A203B",width: 75, height: 75}}/>
                    <Left>
                        <Line></Line>
                        <H1>99%</H1>
                    </Left>
                </Top>
                <P>Our success rate</P>
                </Wrapper>
            </Wrap>
            <Gif2>
                <Gif style={{marginRight: 0, width: "25rem"}} src={twist}/>
            </Gif2>
    </Container>
  )
}

export default Land8;