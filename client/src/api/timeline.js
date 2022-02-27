import axios from 'axios';

const url = 'http://localhost:3000';

const TimelineAPI = {
  fetchTimelineObject: async (token) => await axios.get(
    `${url}${'/content/timeline/byUser/'}${token}`
  ),
};

export default TimelineAPI;
