import jwt from 'jsonwebtoken';

export const encode = (claims) => {
	const token = jwt.sign(claims, 'example', { expiresIn: '7d' });
	return token;
};

export const decode = (token) => {
	const payload = jwt.decode(token, 'example');
	return payload;
};
