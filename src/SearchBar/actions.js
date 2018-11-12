import makeAxiosCall from './services';

export const searchAction = data => {
  return({
    type: 'SEARCH',
    payload: data,
  });
};

export const performSearch = searchValue => {
  return dispatch => {
    console.log('I get called with', searchValue);
    const response = makeAxiosCall(searchValue);
    response.then((data) => {
      console.log('data', data);
      dispatch(searchAction(data));
    }).catch(error => {
      console.log(error);
    });
  };
};
