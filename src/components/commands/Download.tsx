import React, { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Download: React.FC = () => {
    const { history, rerender } = useContext(termContext);

    const currentCommand = _.split(history[0], " ");

    if (rerender && currentCommand[0] === "download" && currentCommand.length <= 1) {

       window.open("https://projects.rajuchoudhary.com.np/resume.pdf", "_blank");
    }
    return (
        <Wrapper>
            <span>🍪🍪 Cooking Resume For You ... </span>
        </Wrapper>
    );

};

export default Download;
