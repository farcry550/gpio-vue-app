import axiosApi from '../utilities/axios-instance';
let ledPin = 4;

const piApi = {
    async turnOnLed() {
      return await axiosApi
      .post('/write', { pin: ledPin, value: '1' })
      .catch((error) => console.log(error));
    },
    async turnOffLed() {
      return await axiosApi
      .post('/write', { pin: ledPin, value: '0' })
      .catch((error) => console.log(error));
    },
    async readLed() {
      return await axiosApi
      .get(`/read/${ledPin}`)
      .catch((error) => console.log(error));
    }
}

export default piApi;