const { Client } = require('@elastic/elasticsearch')

const esclient = new Client({ node: 'http://elasticsearch:9200' })

module.exports = esclient