import { useContext } from "react";
import {
  Cmd,
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
} from "../../../../styles/Welcome.styled";
import { termContext } from "../TerminalContext";

const Welcome: React.FC = () => {
  const { executeCommand } = useContext(termContext);

  const handleHelpClick = () => {
    if (executeCommand) {
      executeCommand("help");
    }
  };

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreWrapper>
          <PreName>
            {`  ____                    _         _
 | __ )  __ _ _ __   __ _| | ____ _| |__
 |  _ \\ / _\` | '_ \\ / _\` | |/ / _\` | '_ \\
 | |_) | (_| | | | | (_| |   < (_| | | | |
 |____/ \\__,_|_| |_|\\__, |_|\\_\\__,_|_| |_|
   |___/`}
          </PreName>
          <PreNameMobile>
            {`  ___                 _        _
 | _ ) __ _ _ _  __ _| |____ _| |_
 | _ \\/ _\` | ' \\/ _\` | / / _\` | ' \\
 |___/\\__,_|_||_\\__, |_\\_\\__,_|_||_|
       |___/`}
          </PreNameMobile>
        </PreWrapper>
        <div>
          For a list of available commands, type `
          <Cmd onClick={handleHelpClick} style={{ cursor: "pointer" }}>
            help
          </Cmd>
          `
        </div>
        <br />
      </div>
    </HeroContainer>
  );
};

export default Welcome;