import React from "react";
import {Cmd, HeroContainer, PreName, PreNameMobile, PreWrapper, Seperator,} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
    return (
        <HeroContainer data-testid="welcome">
            <div className="info-section">
                <PreName>
                    {`
88b           d88                      88               88
888b         d888                      88               88
88\`8b       d8'88                      88               88
88 \`8b     d8' 88  8b,dPPYba,          88  88       88  88   ,d8    ,adPPYba,  88,dPYba,,adPYba,   ,adPPYYba,  8b,dPPYba,
88  \`8b   d8'  88  88P'   "Y8          88  88       88  88 ,a8"    a8P_____88  88P'   "88"    "8a  ""     \`Y8  88P'   \`"8a
88   \`8b d8'   88  88                  88  88       88  8888[      8PP"""""""  88      88      88  ,adPPPPP88  88       88
88    \`888'    88  88          88,   ,d88  "8a,   ,a88  88\`"Yba,   "8b,   ,aa  88      88      88  88,    ,88  88       88
88     \`8'     88  88           "Y8888P"    \`"YbbdP'Y8  88   \`Y8a   \`"Ybbd8"'  88      88      88  \`"8bbdP"Y8  88       88
`}
                </PreName>

                <PreWrapper>
                    <PreNameMobile>
                        {`
        
        |\\/|  _ 
        |  | |  
                
                                  
          |     |   _  _   _   _  
        __) |_| |( (- ||| (_| | ) 
                                          
`}
                    </PreNameMobile>
                </PreWrapper>
                <div>Welcome to MrJukeman's Terminal</div>
                <Seperator>----</Seperator>
                <div>
                    For a list of available commands, type <Cmd>help</Cmd>.
                </div>
                <br/>
            </div>
        </HeroContainer>
    );
};

export default Welcome;
