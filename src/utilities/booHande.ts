import {NextApiResponse} from 'next';
import {Boom} from '@hapi/boom';
export function boomHandle(error:Boom, res:NextApiResponse){
    const data = error.output.payload;
    res.status(data.statusCode).json(data);
}