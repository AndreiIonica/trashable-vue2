import axios from 'axios';
async function signup(email, password, name) {
  const res = await axios.post('https://trashable-server.herokuapp.com/api/0.1/auth/signup', {
    email,
    password,
    name,
  });
  return res.data.token;
}
async function login(email, password) {
  const res = await axios.post('https://trashable-server.herokuapp.com/api/0.1/auth/login', {
    email,
    password,
  });
  return res.data.token;
}

async function creareCos(trashcan, token) {
  const res = await axios.post('https://trashable-server.herokuapp.com/api/0.1/trashcan/', trashcan, {
    headers: {
      'auth-token': token,
    },
  });
  return res.data;
}
async function updatareCos(trashcan, token) {
  const res = await axios.put('https://trashable-server.herokuapp.com/api/0.1/trashcan/', trashcan, {
    headers: {
      'auth-token': token,
    },
  });
  return res.data;
}
async function toateCosurile() {
  const res = await axios.get('https://trashable-server.herokuapp.com/api/0.1/trashcan/');
  return res.data;
}

async function tipuriCosuri() {
  const res = await axios.get('https://trashable-server.herokuapp.com/api/0.1/trashcanType/');
  return res.data;
}

async function orase() {
  const res = await axios.get('https://trashable-server.herokuapp.com/api/0.1/city/');
  return res.data;
}

export default {
  signup,
  login,
  creareCos,
  updatareCos,
  toateCosurile,
  tipuriCosuri,
  orase,
};
