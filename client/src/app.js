import React, { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Error from "./components/error/error";
import "./app.css";

const App = () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setMessageError] = useState("");
  const [theme, setTheme] = useState({});
  return (
    <div className="container" style={theme}>
      <Header setTheme={setTheme} />
      <Main setShowError={setShowError} setMessageError={setMessageError} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ff9df5"
          fillOpacity="1"
          d="M0,64L26.7,90.7C53.3,117,107,171,160,202.7C213.3,235,267,245,320,224C373.3,203,427,149,480,144C533.3,139,587,181,640,176C693.3,171,747,117,800,117.3C853.3,117,907,171,960,186.7C1013.3,203,1067,181,1120,181.3C1173.3,181,1227,203,1280,218.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <Error
        errorMessage={errorMessage}
        showError={showError}
        setShowError={setShowError}
      />
    </div>
  );
};

export default App;
