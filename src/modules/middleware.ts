import { validationResult } from "express-validator";

export const handleInputErrors = (req, res) => {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};
function next() {
  throw new Error("Function not implemented.");
}
