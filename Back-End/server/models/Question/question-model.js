const MainModel = require('../main-model');

class QuestionModel extends MainModel {
  constructor(Model) {
    super(Model);
  }

  /**
   * Validations rules
   */
  validationRules() {}

  /**
   * Remote methods
   */
  remoteMethods() {}

  /**
   * Operation hooks (observers)
   */
  operationHooks() {}

  /**
   * Remote hooks
   */
  remoteHooks() {}

};

module.exports = QuestionModel;
