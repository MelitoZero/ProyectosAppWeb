const paymentDAO = require('../dataAcces/paymentDAO');

const createPayment = async (req, res) =>  {
        const {amount, currency} = req.body;
        const payment = await paymentDAO.createPayment(amount, currency);
        res.json({paymentLink: `http://localhost:3000/api/payments/payment/${payment.id}`});       

}

const showPaymentForm = async (req, res) => {
    const payment = await paymentDAO.getPaymentById(req.params.id);
    if (!payment) return res.status(404).json({message: 'Pago no encontrado'});
    res.sendFile(path.join(__dirname, '../public/payment.html'));       
}

const proccessPayment = async (req, res) => {
    const payment = await paymentDAO.updatePaymentStatus(req.params.id, 'Completed');
    res.json({message: 'Pago procesado', payment});
}

module.exports = {createPayment, showPaymentForm, proccessPayment}