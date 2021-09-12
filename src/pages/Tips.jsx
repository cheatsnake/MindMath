import React from 'react';
import { BackButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { StyledDescr, StyledSubTitle, StyledTitle } from '../components/Texts';

const Tips = () => {

    return (
        <Flexbox direction="column" justify="center" align="center" padding="2rem 1rem">
            <BackButton/>
            <StyledTitle fsize="1.5rem">Useful tips</StyledTitle>
            {/* <StyledDescr align="left">
                Here you will find some really effective tips on the web on how to improve your oral score.
            </StyledDescr> */}
            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Adding numbers</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    Example: 2465 + 289 = ?
                    <br><br>
                    The algorithm of actions:
                    <br><br>
                    1. We decompose all the numbers into digits: we add units with units, tens with tens, thousands with thousands.<br>
                    2. 2000+0=2000 (there are no thousands in 289) <br>
                    3. 400+200=600<br>
                    4. 60+80=140<br>
                    5. 5+9=14<br>
                    6. Add all the resulting numbers <br> 2000+600+140+14=2754
                    <br><br>
                    The answer is ready, the calculations are carried out in a fast and simple way
                    `}}
                />
                </StyledDescr>
            </Flexbox>

            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Subtracting numbers</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    Example: 567-341=?
                    <br><br>
                    The algorithm of actions:
                    <br><br>
                    1. Divide the number into pieces (digits)<br>
                    2. 500-300=200<br>
                    3. 60-40=20<br>
                    4. 7-1=6<br>
                    5. Find the amount 200+20+6=226
                    `}}
                />
                </StyledDescr>
            </Flexbox>

            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Multiplying numbers</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    Example: 37x56
                    <br><br>
                    The algorithm of actions:
                    <br><br>
                    1. 37 multiply by 50, then with the 37th we multiply by 6.<br>
                    2. 37x5= 30x5+7x5=150+35=185. <br>
                    We add 0 to the answer, since the multiplication occurred by tens, not ones. <br>
                    We get that 37x50=1850<br>
                    3. 37x6=30x6+7x6=180+42=222.<br>
                    4. The final stage: we add 200, 20 and 2. 4 to 1850.
                    <br><br>
                    Result: 2072
                    `}}
                />
                </StyledDescr>
            </Flexbox>

            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Division numbers</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    Example: 1584 / 3
                    <br><br>
                    The algorithm of actions:
                    <br><br>
                    1. We are looking for the occurrence of the digit 3 in the number 1584 without a remainder
                    <br>
                    2. The nearest round number that is divisible by 3 is 1500
                    <br>
                    3. We decompose 1584 into 1500 and 84<br>
                    1500:3=500<br>
                    84:3=60:3+24:3=28<br>
                    4. 500+28=528, which is the answer.
                    `}}
                />
                </StyledDescr>
            </Flexbox>
        </Flexbox>
    );
};

export default Tips;