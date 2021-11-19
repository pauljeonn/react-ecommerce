import axios from 'axios';

// const BASE_URL = 'http://localhost:4000/api';
const BASE_URL = 'https://pauljeonn-ecommerce.herokuapp.com/api';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODQwMmZlZDZhZmI1ODFkMDk5MmI0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzMzODYwOCwiZXhwIjoxNjM3NTk3ODA4fQ.JTZC03nn030hqFk9HoxeOpAsuGPgxyIRuESg7HkGNTQ';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
