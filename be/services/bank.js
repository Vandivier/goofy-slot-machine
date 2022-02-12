const service = {};

service.bankBalance = 0;

service.getBankBalance = () => service.bankBalance;
service.updateBankBalance = (increment) => (service.bankBalance += increment);

module.exports = service;
