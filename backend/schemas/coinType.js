const Joi = require('joi')

const coinSchema = Joi.object({
    address: Joi.string().required(),
    name: Joi.string().required(),
    symbol: Joi.string().required(),
    chain: Joi.string().required(),
    tags: Joi.string().required(),
    description: Joi.string().required(),
    contact: Joi.string().required(),
    launch: Joi.string().required(),
    votes: Joi.string().required(),
    website: Joi.string().optional().allow(""),
    github: Joi.string().optional().allow(""),
    telegram: Joi.string().optional().allow(""),
    twitter: Joi.string().optional().allow(""),
    facebook: Joi.string().optional().allow(""),
    linkedin: Joi.string().optional().allow(""),
    audit: Joi.string().optional().allow(""),
    pinksale: Joi.string().optional().allow(""),
    icon: Joi.string().optional().allow(""),
    promote: Joi.boolean().required(),
    show: Joi.boolean().required(),
})

module.exports = {coinSchema}