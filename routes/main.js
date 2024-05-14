function main(_, res) {
  res.status(200).json({
    data: { ok: true },
    status: 200,
    message: "OK"
  })
}

module.exports = { main }