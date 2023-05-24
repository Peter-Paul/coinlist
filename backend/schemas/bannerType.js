const Joi = require('joi')

const bannerSchema = Joi.object({
    name: Joi.string().required(),
    url: Joi.string().required()
})

module.exports = {bannerSchema}