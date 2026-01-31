const notFound = (req, res) => {
  res.status(404).json({ message: 'This Request Is Not Found' });
};

export default notFound;