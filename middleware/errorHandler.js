const errorHanlder = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  return res.status(statusCode).send({ success: false, statusCode, message });
};

export default errorHanlder;
