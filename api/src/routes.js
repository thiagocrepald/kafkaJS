import express from 'express';

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
    // chamar micro serviço
    console.log(req.producer);

    return res.json({ ok: true });
});

export default routes;