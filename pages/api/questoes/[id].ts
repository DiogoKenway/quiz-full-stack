export default function handler(req: any, res: any) {
    res.status(200).json({
       id: +req.query.id,
       name: 'Pedro #02' 
    });
  } 