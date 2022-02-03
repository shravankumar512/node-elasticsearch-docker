const { Router } = require("express");
const esclient = require('./connection');


const router = Router()

router.post('/elastic-operations', async (req, res) => {
    try {

        let result = []
        const { operation, ...reqBody } = req.body;
        console.log('🚀 ~ operation, ...reqBody', operation, reqBody);

        switch (operation) {
            case 'create-index':
                result = await esclient.indices.create(reqBody);
                break;
            case 'delete-index':
                result = await esclient.indices.delete(reqBody);
                break;
            case 'get-mapping':
                result = await esclient.indices.getMapping(reqBody);
                break;
            case 'get-settings':
                result = await esclient.indices.getSettings(reqBody);
                break;
            case 'put-mapping':
                result = await esclient.indices.putMapping(reqBody);
                break;
            case 'put-settings':
                result = await esclient.indices.putSettings(reqBody);
            case 'search':
                result = await esclient.search(reqBody);
                break;
            case 'insert':
                result = await esclient.index(reqBody);
                break;
            case 'update':
                result = await esclient.update(reqBody);
                break;
            case 'delete':
                result = await esclient.delete(reqBody);
                break;

            default:
                result = await esclient.ping();
                break;
        }

        console.log('🚀 ~ result', result);
        res.json(result.body)
    } catch (error) {
        console.log('------->', error)

        res.send(error)
    }
})

module.exports = router;
