module.exports = {
  create: (req, res) => {
    const db = req.app.get("db");
    const {name, description, price, image_url} = req.body;
    db.create_product([name, description, price, image_url]).then(product => {
        // console.log(product)
      res.status(200).send(product)
      ;
    });
  },
  getAll: (req, res) => {
    const db = req.app.get("db");
    db.read_products().then(result => {
      res.status(200).send(result);
    });
  },
  getOne: (req, res) => {
    const db = req.app.get("db");
    const {id} = req.params
    db.read_product([id]).then(result => {
      res.status(200).send(result);
    });
  },
  update: (req, res) => {
    const db = req.app.get("db");
    // console.log(req.params.id)
    const { desc } = req.query;
    const id = req.params.id;
    db.update_product([desc, id]).then(result =>{
        // console.log(desc, id)
      res.status(200).send(result)}
    );
  },
  delete: (req, res) => {
    const db = req.app.get("db");
    // console.log(req.params)
    const productId = req.params.id;
    db.delete_product(productId).then((response) => {
        console.log(productId)
      res.status(200).send(response)
    });
  }
};
