import React, {Dispatch, SetStateAction, useState} from 'react';

// Define the type for the context values
type SurveyModalContextType = {
  modalOpen: boolean;
  openCloseModal: Dispatch<SetStateAction<boolean>>;
}

// Create the context
const SurveyModalContext = React.createContext<SurveyModalContextType>({
  modalOpen: false,
  openCloseModal: () => {},
});

// Define the props type for SurveyModalContextWrapper
type SurveyModalContextWrapperProps = {
  children: React.ReactNode;
};

const SurveyModalContextWrapper = ({
  children,
}: SurveyModalContextWrapperProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  // const openCloseModal = (value: boolean) => setModalOpen(value);
  const openCloseModal: SurveyModalContextType['openCloseModal'] = value => {
    console.log('inside setter function')
    console.log(value)
    setModalOpen(value);
    console.log('after value set')
    console.log('modalOpen in setter: ', modalOpen)
  }

  return (
    <SurveyModalContext.Provider value={{modalOpen, openCloseModal}}>
      {children}
    </SurveyModalContext.Provider>
  );
};

export {SurveyModalContext, SurveyModalContextWrapper};
