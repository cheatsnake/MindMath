import React from 'react';
import { BackButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { StyledDescr, StyledSubTitle, StyledTitle } from '../components/Texts';

const Tips = () => {

    function createMarkup(text) {
        return {__html: text};
    }

    function MyComponent() {
        return <div dangerouslySetInnerHTML={createMarkup()} />;
    }


    return (
        <Flexbox direction="column" justify="center" align="center" padding="2rem 1rem">
            <BackButton/>
            <StyledTitle fsize="1.5rem">Useful tips</StyledTitle>
            <StyledDescr align="left">
                Here you will find some really effective tips on the web on how to improve your oral score.
            </StyledDescr>
            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Adding numbers</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    To learn how to add large numbers in your mind, you need to be able to accurately add numbers up to 10. Ultimately, any complex task is reduced to performing a few trivial actions.
                    <br><br>
                    For example, we add the numbers 8 and 6.
                    To get 10 from 8, 2 is missing.<br>
                    Then we will have to add 4=6-2 to 10.<br>
                    As a result, we get: 8+6=(8+2)+4=10+4=14<br>
                    The main trick with adding large numbers is to break them into bit parts, and then add these parts together.
                    <br><br>
                    Let's say we need to add two numbers: 356 and 728.
                    The number 356 can be represented as 300+50+6.<br>
                    Similarly, 728 will have the form 700+20+8.<br>
                    Now we add up: 356+728=(300+700)+(50+20)+(8+6)=1000+70+14=1084
                    `}}
                />
                </StyledDescr>
            </Flexbox>

            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Subtracting numbers</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    Subtracting numbers will also be easy. But unlike addition, where each number is divided into bit parts, when subtracting, only the number that we subtract needs to be "split".
                    <br><br>
                    For example, how many will be 528-321?<br>
                    We divide the number 321 into bit parts and get:<br>
                    321=300+20+1.
                    Now we count:<br>
                    528-300-20-1=228-20-1=208-1=207
                    `}}
                />
                </StyledDescr>
            </Flexbox>

            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Multiplying multi-digit numbers by single-digit ones</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    First, practice multiplying multi-digit numbers by single-digit ones. 
                    <br>
                    Let's multiply 528 by 6.<br>
                    Divide the number 528 into digits and go from the highest to the lowest.<br>
                    First we multiply, and then we add the results.<br>
                    528 = 500+20+8 528*6 =<br>
                    = 500*6+20*6+8*6 =<br>
                    = 3000+120+48 = 3168
                    `}}
                />
                </StyledDescr>
            </Flexbox>

            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Multiplying two-digit numbers</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    There is nothing complicated here either, only the load on short-term memory is a little more.
                    Multiply 28 and 32. <br>
                    To do this, we will reduce the entire operation to multiplication by single-digit numbers. <br><br>
                    Let's imagine 32 as 30+2 <br>
                    28*32 = 28*30+28*2 = 20*30+8*30+20*2+8*2 = 600+240+40+16 = 896<br>
                    Another example. Multiply 79 by 57.<br>
                    This means that you need to take the number " 79 " 57 times.<br>
                    Let's break the entire operation into stages.<br>
                    First, we multiply 79 by 50, and then-79 by 7.<br>
                    79*50 = (70+9)*50 = 3500+450 = 3950<br>
                    79*7 = (70+9)*7 = 490+63 = 553 3950+553 = 4503
                    `}}
                />
                </StyledDescr>
            </Flexbox>

            <Flexbox direction="column" padding="1rem 0">
                <StyledSubTitle align="left"># Division by a two-digit number</StyledSubTitle>
                <StyledDescr align="left">
                <p
                    dangerouslySetInnerHTML={{__html: `
                    When dividing by a two-digit number, you need to use the rule of the last digit of the result when multiplying two numbers.
                    <br><br>
                    For example, multiply 1325 by 656. According to the rule, the last digit in the resulting number will be 0, since 5*6=30. Indeed, 1325*656=869200.
                    <br><br>
                    Now, armed with this valuable information, let's consider division by a two-digit number. How much is 4424:56?
                    <br><br>
                    Initially, we will use the "fitting" method and find the limits in which the result lies. We need to find a number that, when multiplied by 56, will give 4424. Intuitively, let's try the number 80.
                    <br><br>
                    56*80=4480
                    <br><br>
                    This means that the desired number is less than 80 and clearly more than 70. Let's determine its last digit. Its product by 6 should end with the number 4. According to the multiplication table, the results 4 and 9 are suitable for us. It is logical to assume that the result of division can be either the number 74 or 79. Checking it out:
                    <br><br>
                    This means that the desired number is less than 80 and clearly more than 70. Let's determine its last digit. Its product by 6 should end with the number 4. According to the multiplication table, the results 4 and 9 are suitable for us.
                    It is logical to assume that the result of division can be either the number 74 or 79.<br>
                    Check: 79*56=4424<br>
                    Done, the solution has been found!
                    If the number 79 did not fit, the second option would definitely be correct.
                    `}}
                />
                </StyledDescr>
            </Flexbox>
        </Flexbox>
    );
};

export default Tips;