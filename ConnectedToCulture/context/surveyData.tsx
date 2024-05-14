import React, {Dispatch, SetStateAction, useState} from 'react';

// Define the type for the selected state
type SelectedState = {
  NG: boolean;
  ET: boolean;
  TG: boolean;
  ZA: boolean;
  GH: boolean;
  Zambia: boolean;
  q1Text: string;
  wildlife: boolean;
  historical: boolean;
  cultural: boolean;
  adventure: boolean;
  food: boolean;
  entertainment: boolean;
  q2Text: string;
  airplane: boolean;
  public: boolean;
  car: boolean;
  bicycle: boolean;
  notSure: boolean;
  exploreDest: boolean;
  recieveFlightInfo: boolean;
  accessAirportInfo: boolean;
  findAccom: boolean;
  utilizeLangTrans: boolean;
  planActivities: boolean;
  noneOfAbove: boolean;
};

// Define the type for the context value
type SurveyDataContextType = {
  selected: SelectedState;
  setSelected: Dispatch<SetStateAction<SelectedState>>;
};

// Create the context
const SurveyDataContext = React.createContext<SurveyDataContextType>({
  selected: {
    NG: false,
    ET: false,
    TG: false,
    ZA: false,
    GH: false,
    Zambia: false,
    q1Text: '',
    wildlife: false,
    historical: false,
    cultural: false,
    adventure: false,
    food: false,
    entertainment: false,
    q2Text: '',
    airplane: false,
    public: false,
    car: false,
    bicycle: false,
    notSure: false,
    exploreDest: false,
    recieveFlightInfo: false,
    accessAirportInfo: false,
    findAccom: false,
    utilizeLangTrans: false,
    planActivities: false,
    noneOfAbove: false,
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
    NG: false,
    ET: false,
    TG: false,
    ZA: false,
    GH: false,
    Zambia: false,
    q1Text: '',
    wildlife: false,
    historical: false,
    cultural: false,
    adventure: false,
    food: false,
    entertainment: false,
    q2Text: '',
    airplane: false,
    public: false,
    car: false,
    bicycle: false,
    notSure: false,
    exploreDest: false,
    recieveFlightInfo: false,
    accessAirportInfo: false,
    findAccom: false,
    utilizeLangTrans: false,
    planActivities: false,
    noneOfAbove: false,
  });

  return (
    <SurveyDataContext.Provider value={{selected, setSelected}}>
      {children}
    </SurveyDataContext.Provider>
  );
};

export {SurveyDataContext, SurveyDataProviderWrapper};
