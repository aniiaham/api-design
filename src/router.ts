import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Product
 * */
router.get("/product", (req, res) => {
  res.json({ message: "Hello" });
});
router.get("/product/:id", () => {});
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);
router.post("/product", (req, res) => {});
router.delete("/product/:id", () => {});

/**
 * Update
 * */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", body("title").isString(), (req, res) => {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

/**
 * Update Point
 * */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
