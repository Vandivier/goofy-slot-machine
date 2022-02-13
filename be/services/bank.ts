const service = {
  bankBalance: 0,
  getBankBalance: () => service.bankBalance,
  updateBankBalance: (increment) => (service.bankBalance += increment),
};

export default service;
