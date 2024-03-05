const router = require('express').Router();

const userController = require('../controller/user.controller');

//ADD USER
router.post("/", userController.addUsser);

//GET ALL USER
router.get("/", userController.getAllUser);

//GET AN USER
router.get("/:id", userController.getAnUser);

//UPDATE USER
router.put("/:id", userController.updateUser);

//DELETE USER
router.delete("/:id", userController.deletedUser);


module.exports = router;