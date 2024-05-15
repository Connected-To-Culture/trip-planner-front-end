import React, {Dispatch, SetStateAction, useState} from 'react';

// Define the type for the selected state
type SelectedState = {
  q1NG: boolean;
  q1ET: boolean;
  q1TG: boolean;
  q1ZA: boolean;
  q1GH: boolean;
  q1Zambia: boolean;
  q1Text: string;
  q2wildlife: boolean;
  q2historical: boolean;
  q2cultural: boolean;
  q2adventure: boolean;
  q2food: boolean;
  q2entertainment: boolean;
  q2Text: string;
  q3airplane: boolean;
  q3public: boolean;
  q3car: boolean;
  q3bicycle: boolean;
  q3notSure: boolean;
  q4exploreDest: boolean;
  q4recieveFlightInfo: boolean;
  q4accessAirportInfo: boolean;
  q4findAccom: boolean;
  q4utilizeLangTrans: boolean;
  q4planActivities: boolean;
  q4noneOfAbove: boolean;
};

// Define the type for the context value
type SurveyDataContextType = {
  selected: SelectedState;
  setSelected: Dispatch<SetStateAction<SelectedState>>;
};

// Create the context
const SurveyDataContext = React.createContext<SurveyDataContextType>({
  selected: {
    q1NG: false,
    q1ET: false,
    q1TG: false,
    q1ZA: false,
    q1GH: false,
    q1Zambia: false,
    q1Text: '',
    q2wildlife: false,
    q2historical: false,
    q2cultural: false,
    q2adventure: false,
    q2food: false,
    q2entertainment: false,
    q2Text: '',
    q3airplane: false,
    q3public: false,
    q3car: false,
    q3bicycle: false,
    q3notSure: false,
    q4exploreDest: false,
    q4recieveFlightInfo: false,
    q4accessAirportInfo: false,
    q4findAccom: false,
    q4utilizeLangTrans: false,
    q4planActivities: false,
    q4noneOfAbove: false,
  },
  setSelected: () => {},
});

// Define the props type for SurveyDataProviderWrapper
type SurveyDataProviderWrapperProps = {
  children: React.ReactNode;
};

const SurveyDataProviderWrapper = ({
  children,
}: SurveyDataProviderWrapperProps) => {
  const [selected, setSelected] = useState<SelectedState>({
    q1NG: false,
    q1ET: false,
    q1TG: false,
    q1ZA: false,
    q1GH: false,
    q1Zambia: false,
    q1Text: '',
    q2wildlife: false,
    q2historical: false,
    q2cultural: false,
    q2adventure: false,
    q2food: false,
    q2entertainment: false,
    q2Text: '',
    q3airplane: false,
    q3public: false,
    q3car: false,
    q3bicycle: false,
    q3notSure: false,
    q4exploreDest: false,
    q4recieveFlightInfo: false,
    q4accessAirportInfo: false,
    q4findAccom: false,
    q4utilizeLangTrans: false,
    q4planActivities: false,
    q4noneOfAbove: false,
  });

  return (
    <SurveyDataContext.Provider value={{selected, setSelected}}>
      {children}
    </SurveyDataContext.Provider>
  );
};

export {SurveyDataContext, SurveyDataProviderWrapper};
