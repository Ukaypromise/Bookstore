const CHECKING_STATUS = 'src/redux/categories/CHECKING_STATUS';

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECKING_STATUS,
});

export { checkStatus };
export default categoryReducer;
