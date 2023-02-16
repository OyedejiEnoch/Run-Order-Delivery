const express = require("express")

const router = express.Router();


const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createProductReview, getProductReviews, deleteReview, getAdminProducts } = require("../controllers/productControllers")


const { isAunthenticatedUser, authorizedRoles } = require("../middleWares/auth")

router.route("/products").get(getProducts);
router.route("/admin/products").get(getAdminProducts);
router.route("/products/:id").get(getSingleProduct);

router.route("/admin/product/new").post(isAunthenticatedUser, authorizedRoles("admin", "agents"), newProduct);
router.route("/admin/products/:id")
    .put(isAunthenticatedUser, authorizedRoles("admin"), updateProduct)
    .delete(isAunthenticatedUser, authorizedRoles("admin"), deleteProduct);


router.route("/review").put(isAunthenticatedUser, createProductReview)
router.route("/reviews").get(isAunthenticatedUser, getProductReviews)
router.route("/reviews").delete(isAunthenticatedUser, deleteReview)
module.exports = router;