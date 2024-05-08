import React, {Dispatch, SetStateAction, useState} from 'react';

// Define the type for the context values
type SurveyModalContextType = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

// Create the context
const SurveyModalContext = React.createContext<SurveyModalContextType>({
  modalOpen: false,
  setModalOpen: () => {},
});

// Define the props type for SurveyModalContextWrapper
type SurveyModalContextWrapperProps = {
  children: React.ReactNode;
};

const SurveyModalContextWrapper = ({
  children,
}: SurveyModalContextWrapperProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SurveyModalContext.Provider value={{modalOpen, setModalOpen}}>
      {children}
    </SurveyModalContext.Provider>
  );
};

export {SurveyModalContext, SurveyModalContextWrapper};
