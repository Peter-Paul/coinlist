const Joi = require('joi')

const gameSchema = Joi.object({
    address: Joi.string().required(),
    name: Joi.string().required(),
    chain: Joi.string().required(),
    description: Joi.string().required(),
    contact: Joi.string().required(),
    youtube: Joi.string().optional().allow(""),
    website: Joi.string().optional().allow(""),
    github: Joi.string().optional().allow(""),
    telegram: Joi.string().optional().allow(""),
    twitter: Joi.string().optional().allow(""),
    facebook: Joi.string().optional().allow(""),
    linkedin: Joi.string().optional().allow(""),
    icon: Joi.string().optional().allow(""),
    show: Joi.boolean().required(),
})

module.exports = {gameSchema}