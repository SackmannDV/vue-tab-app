module.exports= (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello dear ${req.body.email}`
      })
  })
}