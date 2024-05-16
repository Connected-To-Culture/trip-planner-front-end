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
  q5FlightAirportInfo: boolean;
  q5AccomOptions: boolean;
  q5Weather: boolean;
  q5ActivityRecs: boolean;
  q5LangTrans: boolean;
  q5Text: string;
  q6Hotels: boolean;
  q6Hostels: boolean;
  q6VacaRentals: boolean;
  q6Camping: boolean;
  q6notSure: boolean;
  q7LessThanWeek: boolean;
  q7_1_2Weeks: boolean;
  q7_1_3Months: boolean;
  q7_3MonthsToYear: boolean;
  q7MoreThanYear: boolean;
  q8_1: boolean;
  q8_2: boolean;
  q8_3: boolean;
  q8_4: boolean;
  q8_5: boolean;
  q8PreferNotSay: boolean;
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
    q5FlightAirportInfo: false,
    q5AccomOptions: false,
    q5Weather: false,
    q5ActivityRecs: false,
    q5LangTrans: false,
    q5Text: '',
    q6Hotels: false,
    q6Hostels: false,
    q6VacaRentals: false,
    q6Camping: false,
    q6notSure: false,
    q7LessThanWeek: false,
    q7_1_2Weeks: false,
    q7_1_3Months: false,
    q7_3MonthsToYear: false,
    q7MoreThanYear: false,
    q8_1: false,
    q8_2: false,
    q8_3: false,
    q8_4: false,
    q8_5: false,
    q8PreferNotSay: false,
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
    q5FlightAirportInfo: false,
    q5AccomOptions: false,
    q5Weather: false,
    q5ActivityRecs: false,
    q5LangTrans: false,
    q5Text: '',
    q6Hotels: false,
    q6Hostels: false,
    q6VacaRentals: false,
    q6Camping: false,
    q6notSure: false,
    q7LessThanWeek: false,
    q7_1_2Weeks: false,
    q7_1_3Months: false,
    q7_3MonthsToYear: false,
    q7MoreThanYear: false,
    q8_1: false,
    q8_2: false,
    q8_3: false,
    q8_4: false,
    q8_5: false,
    q8PreferNotSay: false,
  });

  return (
    <SurveyDataContext.Provider value={{selected, setSelected}}>
      {children}
    </SurveyDataContext.Provider>
  );
};

export {SurveyDataContext, SurveyDataProviderWrapper};
