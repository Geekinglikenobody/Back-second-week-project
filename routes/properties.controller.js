const {Router} = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const imageMiddleware = require("../middleware/img.middleware")
const { propertyController } = require("../controllers/properties.controller")
const router = Router()

router.post("/property", propertyController.createProperty)
router.get("/property", propertyController.getProperties)
router.delete("/property", propertyController.deleteProperties)
router.post("/property/filter", propertyController.filterProperties)
module.exports = router

// {
//     "img":["https://cdn.esoft.digital/19201080/cluster/photos/bb/fa/22763792f395f9666a546d134cc9a2fa40dcfabb.png","https://cdn.esoft.digital/19201080/cluster/photos/e1/ab/94dccf3429d801ad0ced45d467d3fe152997abe1.png","https://cdn.esoft.digital/19201080/cluster/photos/08/bb/80ea8fd12fabec239c8018aaeeb2ed3d922ebb08.png"],
//     "rooms":"2",
//     "quadrature": 45,
//     "floor": "9/34",
//     "address": "р-н Нижегородский, ул. Перовское 2 ЖК, 2",
//     "price": 16500000,
//     "typeRemont":"дизайнерский ремонт",
//     "typeSell": "sell",
//     "typeProperty": "Квартира"
// }