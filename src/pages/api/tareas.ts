// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ControllersTareas } from '@/controllers/controllerTareas';
import { boomHandle } from '@/utilities/booHande';
import boom from '@hapi/boom';
import type { NextApiRequest, NextApiResponse, } from 'next'

const controllers = new ControllersTareas();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const method = req.method;
    if (method === 'GET') {
      const data = await controllers.leerDatos();
      res.status(200).json(data);
    }
    else if (method === 'POST') {
      const tarea = req.body as TareaReq;
      const data = await controllers.agregarTarea(tarea);
      res.status(201).json(data);
    }
    else if (method === 'DELETE') {
      const { id_tarea } = req.query as { id_tarea: string };
      if (!id_tarea) {
        res.status(400).json({ message: "porblemas al encontrar id" });
      } else {
        const tarea = await controllers.borrarTarea(id_tarea);
        res.status(200).json(tarea);
      }
    }
    else if (method === 'PATCH') {
      const data = req.body;
      const tarea = await controllers.editarTarea(data);
      res.status(200).json(tarea);
    }
  } catch (error) {
    boomHandle(boom.badImplementation('Problemas para generar esta accion'), res);
  }
}
