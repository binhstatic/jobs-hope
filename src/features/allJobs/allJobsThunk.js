import customFetch from '../../utils/axios';

export const getAllJobsThunk = async (_, ThunkAPI) => {
  const { searchStatus, searchType, sort, page, search } =
    ThunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const response = await customFetch.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
