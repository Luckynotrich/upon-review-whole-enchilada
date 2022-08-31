const express = require("express");
const router = express.Router();
const uuid = require("uuid");


let categories

router.use(express.urlencoded({ extended: false }));

// Gets all records
router.get("/", async (request, response, next) => {
  const getAllCats = require('../db/cat-db-services')
  console.log('userId categories = ', process.env.USERID)
  try {
    await getAllCats(setCats, process.env.USERID)
    categories = await setCats.cats;
    await console.log('categories =',categories)
    await response.json(categories)
  }
  catch (err) {
   await console.error(`Could not get categories: ${err}`);
  }

});
const setCats = {
  set current(category) {
    this.cats.push(category);
  },
  cats: []
}


// get single member
router.get("/:id", (req, res) => {
  const found = categories.some(
    (category) => category.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      categories.filter((category) => category.id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `Category ${req.params.id} not found` });
  }
});

// add new category to array
router.post("/", (req, res) => {
  console.log("body", req.body);
  const newCategory = {
    id: uuid.v4(),
    name: req.body.name,
    pros: req.body.pros,
    cons: req.body.cons,
  };
  if (!newCategory.name) {
    return res.status(400).json({ msg: "Name must be included" });
  }

  categories.push(newCategory);
  res.json(categories);
  insertCat(userId, newCategory.name, newCategory.pros, newCategory.cons);
});

// update single member
router.put("/:id", (req, res) => {
  const found = categories.some(
    (category) => category.id === parseInt(req.params.id)
  );
  if (found) {
    const updCategory = req.body;
    categories.forEach((category) => {
      if (category.id === parseInt(req.params.id)) {
        category.name = updCategory ? updCategory.name : category.name;
        category.pros.forEach((pro) => {
          if (category.pro !== updCategory.pro)
            // eslint-disable-next-line curly
            category.pro = updCategory.pro ? updCategory.pro : category.pro;
        });
        category.cons.forEach((con) => {
          if (category.con !== updCategory.con)
            // eslint-disable-next-line curly
            category.con = updCategory.con ? updCategory.con : category.con;
        });

        category.cons = req.params.cons;
        res.json({ msg: "Category updated", category });
      }
    });
  } else {
    res.status(400).json({ msg: `Category ${req.params.id} not found` });
  }
});
// async function writeCatFile(categories) {
//   const filePath = path.resolve(__dirname, "../../data/catFile.js");
//   const fileData =
//     "const categories =" +
//     JSON.stringify(categories, null, "\t") +
//     "\n module.exports = categories";

//   try {
//     const data = await fs.writeFile(filePath, fileData, () =>
//       console.log("writeCat", data)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = router;
